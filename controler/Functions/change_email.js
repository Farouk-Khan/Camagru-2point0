<?php
function change_email($username, $pass, $new_email) {
    include "../config/connect.php";
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$pass'";
    try {
        $stmt = $conn->query($sql);
        $stmt->execute();
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
    if ($stmt->rowCount() > 0) {
        $sql1 = "UPDATE users SET email='$new_email' WHERE username='$username' AND password='$pass'";
        try {
            $stmt1 = $conn->prepare($sql1);
            $stmt1->execute();
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
    }
}
?>