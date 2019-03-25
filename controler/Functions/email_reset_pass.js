<?php
function email_reset_pass($email) {
    include "../config/connect.php";
    $host = $_SERVER['SCRIPT_FILENAME'];
    $dir = dirname($host, 2);
    $dir = basename($dir);
    $confirm_code = '$'.bin2hex(openssl_random_pseudo_bytes(4));
    $subject = 'Reset password';
    $header = "From : no_reply@camgru.com \r\n";
    $message = "Thank you for signing up with us $username :) \r\n
                Please <a href= 'http://localhost:8080/".$dir."/Functions/account_pass.php?confirmkey=".$confirm_code."'>click here</a>
                to access your account.";
    $sent = mail($email, $subject, $message, $header);
    if ($sent == true)  {
        echo '<script>alert ("Request sent");window.location.href="../index.php"</script>';
    }
    echo '<script>alert ("Reset email failure")</script>';
}
?>