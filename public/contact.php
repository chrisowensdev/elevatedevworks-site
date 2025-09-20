<?php
// contact.php (no Composer version)
// Requires PHPMailer files. If not installed via Composer, download PHPMailer release
// and place the 'src' folder somewhere you can include (e.g., under public_html/phpmailer/).

header('Content-Type: application/json');

// 1) Load secrets (kept OUTSIDE public_html)
$config = require __DIR__ . '/../secure/config.php';

// 2) Include PHPMailer (manual)
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';
require __DIR__ . '/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* ---------------- CORS (browser → PHP directly) ---------------- */

$allowOrigin = $config['ALLOW_BROWSER_ORIGIN'] ?? '';
$origin      = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($allowOrigin && $origin === $allowOrigin) {
    header('Access-Control-Allow-Origin: ' . $allowOrigin);
    header('Vary: Origin');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

/* ---------------- File-based IP Rate Limit ---------------- */
$ip       = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$now      = time();
$RL_MAX   = (int)($config['RATE_LIMIT_MAX']    ?? 5);   // max requests
$RL_WIN   = (int)($config['RATE_LIMIT_WINDOW'] ?? 300); // per N seconds
$RL_DIR   = $config['RATE_LIMIT_DIR'] ?? (__DIR__ . '/../secure/ratelimit');

if (!is_dir($RL_DIR)) {
    @mkdir($RL_DIR, 0755, true);
}
$bucketKey = preg_replace('/[^a-z0-9\.\:\-]/i', '_', $ip);
$bucket    = $RL_DIR . '/' . $bucketKey . '.log';

// Load + prune timestamps
$timestamps = [];
if (is_file($bucket)) {
    $raw = @file($bucket, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
    foreach ($raw as $line) {
        $t = (int)$line;
        if ($t >= $now - $RL_WIN) $timestamps[] = $t;
    }
}
if (count($timestamps) >= $RL_MAX) {
    http_response_code(429);
    header('Retry-After: ' . max(1, ($timestamps[0] + $RL_WIN) - $now));
    echo json_encode(['error' => 'Too many requests, please try again later.']);
    exit;
}
// Record this hit
$timestamps[] = $now;
$tmpFile = $bucket . '.tmp';
@file_put_contents($tmpFile, implode("\n", $timestamps) . "\n");
@rename($tmpFile, $bucket);

/* ---------------- Read JSON body ---------------- */
$raw   = file_get_contents('php://input');
$input = json_decode($raw, true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Fields
$name       = trim($input['name'] ?? '');
$email      = trim($input['email'] ?? '');
$message    = trim($input['message'] ?? '');
$userAgent  = (string)($input['userAgent'] ?? '');
$clientIp   = (string)($input['ip'] ?? ($ip));
$honeypot   = trim($input['website'] ?? '');            // hidden spam trap
$startedAt  = (int)($input['startedAt'] ?? 0);          // ms epoch set on page load
$nowMs      = (int)(microtime(true) * 1000);
$tooFast    = ($startedAt && ($nowMs - $startedAt) < 2000); // < 2s → likely bot

// Silent drop for obvious bots (don’t help them tune)
if ($honeypot !== '' || $tooFast) {
    echo json_encode(['ok' => true]);
    exit;
}

/* ---------------- Basic validation + limits ---------------- */
if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid payload']);
    exit;
}
// Reasonable length caps
if (mb_strlen($name) > 120 || mb_strlen($email) > 200 || mb_strlen($message) > 4000) {
    http_response_code(400);
    echo json_encode(['error' => 'Message too long']);
    exit;
}

/* ---------------- Send mail via PHPMailer ---------------- */
$mail = new PHPMailer(true);

try {
    $mail->CharSet   = 'UTF-8';
    $mail->isSMTP();
    $mail->Host       = $config['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['SMTP_USER'];
    $mail->Password   = $config['SMTP_PASS'];

    // Match encryption to port (587 → STARTTLS, 465 → SMTPS)
    $port = (int)($config['SMTP_PORT'] ?? 587);
    if ($port === 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }
    $mail->Port = $port;

    // From/To — keep From on your domain; set envelope sender explicitly
    $from = $config['CONTACT_FROM'];
    $to   = $config['CONTACT_TO'];
    $mail->setFrom($from, 'Website Contact (elevatedevworks.com)');
    $mail->Sender = $config['SMTP_USER']; // envelope sender / Return-Path
    $mail->addAddress($to);
    $mail->addReplyTo($email, $name);

    $safe = static function ($v) {
        return htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8');
    };

    $mail->isHTML(true);
    $mail->Subject = 'New website contact';
    $mail->Body = sprintf(
        '<p><strong>Name:</strong> %s</p>
         <p><strong>Email:</strong> %s</p>
         <p><strong>Message:</strong><br>%s</p>
         <hr>
         <p><small>IP: %s<br>User-Agent: %s</small></p>',
        $safe($name),
        $safe($email),
        nl2br($safe($message)),
        $safe($clientIp),
        $safe($userAgent)
    );
    $mail->AltBody = "Name: $name\nEmail: $email\n\nMessage:\n$message\n\nIP: $clientIp\nUA: $userAgent";

    $mail->send();
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Mailer error: ' . $mail->ErrorInfo]);
}
