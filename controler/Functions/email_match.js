<?php
function email_match($email) {
    include "../config/connect.php";
        $sql = "SELECT * FROM users WHERE email='$email'";
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