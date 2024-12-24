<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile = htmlspecialchars($_POST['mobile']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "alanberingin36@gmail.com"; // Ganti dengan alamat email Anda
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n";

    $body = "Name: $name\nEmail: $email\nMobile: $mobile\nSubject: $subject\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>