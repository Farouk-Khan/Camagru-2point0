<?php
    function confirm_email($username, $email) {
        $host = $_SERVER['SCRIPT_FILENAME'];
        $dir = dirname($host, 2);
        $dir = basename($dir);
        $confirm_code = hash('whirlpool', $username);
        $subject = 'Confirm your email please.';
        $header = "From : no_reply@camgru.com \r\n";
        $message = "Thank you for signing up with us $username :) \r\n
                    Please <a href= 'http://localhost:8080/".$dir."/Functions/confirmed.php?confirmkey=".$confirm_code."'>click here</a>
                    to access your account.";
        $sent = mail($email, $subject, $message, $header);
        if ($sent == true) {
            echo '<script>alert ("Please check you email for confirmation");window.location.href="../index.php"</script>';
        }
        else {
            echo '<script>alert ("Please enter a real email address");window.locaction.href="../index.php"</script>';
        }
    }
?>