<?php
// contact.php (no Composer version)
// Requires PHPMailer files. If not installed via Composer, download the PHPMailer source
// and place the 'src' folder somewhere you can include (e.g., under public_html/phpmailer/).

// 1) Load secrets
$config = require __DIR__ . '/../secure/config.php';

// 2) Include PHPMailer (no Composer)
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';
require __DIR__ . '/phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

// ---- Optional auth between Next.js and PHP
$apiKeyHeader = $_SERVER['HTTP_X_API_KEY'] ?? '';
if (!empty($config['PHP_CONTACT_API_KEY']) && $apiKeyHeader !== $config['PHP_CONTACT_API_KEY']) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// ---- CORS (only if you post to PHP directly from the browser; not needed if Next proxies)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: https://your-next-site.com');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With, X-Api-Key');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    exit(0);
} else {
    // If not using direct browser calls, you can omit this or restrict origin
    // header('Access-Control-Allow-Origin: https://your-next-site.com');
}

// ---- Read JSON body
$input = json_decode(file_get_contents('php://input'), true);
$name      = trim($input['name'] ?? '');
$email     = trim($input['email'] ?? '');
$message   = trim($input['message'] ?? '');
$userAgent = $input['userAgent'] ?? '';
$ip        = $input['ip'] ?? ($_SERVER['REMOTE_ADDR'] ?? 'unknown');

// ---- Basic validation
if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid payload']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // SMTP
    $mail->isSMTP();
    $mail->Host       = $config['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['SMTP_USER'];
    $mail->Password   = $config['SMTP_PASS'];
    // STARTTLS is common on 587; switch to ENCRYPTION_SMTPS + port 465 if your provider requires it
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int)($config['SMTP_PORT'] ?? 587);

    // Addresses
    $mail->setFrom($config['CONTACT_FROM'], 'Website Contact');
    $mail->addAddress($config['CONTACT_TO']);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->Subject = 'New website contact';
    $mail->isHTML(true);
    $mail->Body = sprintf(
        '<p><strong>Name:</strong> %s</p>
     <p><strong>Email:</strong> %s</p>
     <p><strong>Message:</strong><br>%s</p>
     <hr>
     <p><small>IP: %s<br>User-Agent: %s</small></p>',
        htmlspecialchars($name),
        htmlspecialchars($email),
        nl2br(htmlspecialchars($message)),
        htmlspecialchars($ip),
        htmlspecialchars($userAgent)
    );
    $mail->AltBody = "Name: $name\nEmail: $email\n\nMessage:\n$message\n\nIP: $ip\nUA: $userAgent";

    $mail->send();
    echo json_encode(['ok' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Mailer error: ' . $mail->ErrorInfo]);
}
