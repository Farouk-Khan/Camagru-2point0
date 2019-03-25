<?php
    function verify($username, $pass) {
        include "../config/connect.php";
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$pass' AND confirm='1'";
        try {
            $stmt = $conn->query($sql);
        }
        catch(PDOException $e) {
            echo $e->getMessage();
            return (0);
        }
        if ($stmt->rowCount() > 0) {
            $conn = null;
            return (1);
        }
        else {
            $conn = null;
            return (0);
        }
    }
?>