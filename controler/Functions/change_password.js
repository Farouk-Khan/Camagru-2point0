<?php
function change_password($username, $pass) {
    include "../config/connect.php";
    $sql = "SELECT * FROM users WHERE username='$username'";
    try {
        $stmt = $conn->query($sql);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
    if ($stmt->rowCount() > 0) {
        $sql1 = "UPDATE users SET password='$pass' WHERE username='$username'";
        try {
            $stmt1 = $conn->prepare($sql1);
            $stmt1->execute();
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
        echo '<script>alert ("Your password was successfully changed");window.location.href="../home.php"</script>';
    }
    $conn = null;
    }
?>