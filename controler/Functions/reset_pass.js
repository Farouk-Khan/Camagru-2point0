<?php
    include "../config/connect.php";
    include "email_reset_pass.php";
    $username = $_POST['username'];
    $email = $_POST['email'];
    $sql = "SELECT * FROM users WHERE username='$username' AND email='$email'";
    try {
        $stmt = $conn->query($sql);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
        echo '<script>alert ("You do not have an account with us. Please create one");window.location.href="../index.php"</script>';
        exit();
    }
    if ($stmt->rowCount() > 0) {
        email_reset_pass($email);
    }
    else {
        echo '<script>alert ("You do not have an account, please create one");window.location.href="../index.php"</script>';
    }
?>