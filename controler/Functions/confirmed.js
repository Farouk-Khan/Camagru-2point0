<?php
    session_start();
    include "../config/connect.php";
    $confirmkey = $_GET['confirmkey'];
    $sql = "SELECT * FROM users WHERE confirm_code='$confirmkey'";
    try {
        $stmt = $conn->query($sql);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
    if ($stmt->rowCount() > 0) {
        $update = "UPDATE users SET confirm='1' WHERE confirm_code='$confirmkey'";
        try {
            $stmt1 = $conn->prepare($update);
            $stmt1->execute();
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
        echo '<script>alert ("The confirmation code was accepted");window.location.href="../index.php"</script>';
    }
    else {
        echo '<script>alert ("Please re-enter your details on the login form");window.location.href="../index.php"</script>';
    }
    $conn = null;
?>