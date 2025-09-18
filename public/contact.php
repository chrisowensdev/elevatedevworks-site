<?php
// public/contact.php
header('Content-Type: application/json');

// --- Basic CSRF-ish origin allowlist (adjust to your domains) ---
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$allowed = [
    'https://chrisowens.dev',
    'https://www.chrisowens.dev',
    'http://localhost:3000',
];
$validOrigin = (!$origin && !$referer) || in_array($origin, $allowed, true) || array_reduce($allowed, fn($ok, $o) => $ok || str_starts_with($referer, $o), false);
if (!$validOrigin) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Invalid origin']);
    exit;
}

// Only POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

// Collect fields
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$website = trim($_POST['website'] ?? ''); // honeypot
$startedAt = intval($_POST['startedAt'] ?? 0);

// Spam guards
if ($website) {
    echo json_encode(['ok' => true]);
    exit;
} // bots fill hidden field
if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($message) < 10 || strlen($message) > 4000) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid fields']);
    exit;
}
// Minimum time on page (2s)
if (!$startedAt || (intval(microtime(true) * 1000) - $startedAt) < 2000) {
    echo json_encode(['ok' => true]);
    exit;
}

// --- Load secrets (NOT in repo). Create /home/<user>/secure/config.php on the server ---
require __DIR__ . '/../secure/config.php'; // defines RESEND_API_KEY, CONTACT_FROM, CONTACT_TO

// HTML email
function esc($s)
{
    return htmlspecialchars($s ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
$html = '<div style="font-family:Arial,sans-serif"><h2 style="margin:0 0 12px">New Inquiry</h2>'
    . '<p><b>Name:</b> ' . esc($name) . '</p>'
    . '<p><b>Email:</b> ' . esc($email) . '</p>'
    . '<p style="margin:16px 0 6px"><b>Message:</b></p>'
    . '<p style="white-space:pre-line;margin:0">' . nl2br(esc($message)) . '</p></div>';

$payload = [
    'from' => CONTACT_FROM,          // must be on a verified domain in Resend
    'to' => CONTACT_TO,
    'subject' => 'New contact from ' . $name,
    'reply_to' => $email,            // REST API uses snake_case
    'text' => "Name: $name\nEmail: $email\n\n$message\n",
    'html' => $html,
];

// Call Resend REST API (server-side)
$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . RESEND_API_KEY, 'Content-Type: application/json'],
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
]);
$res = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err  = curl_error($ch);
curl_close($ch);

if ($code >= 200 && $code < 300) {
    echo json_encode(['ok' => true]);
} else {
    error_log("Resend error ($code): $res $err");
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Email failed']);
}
