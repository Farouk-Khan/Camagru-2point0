<?php
    function insert_user($username, $email, $pass)
    {
        include '../config/connect.php';
        $confirm_code = hash('whirlpool', $username);

        $sql = "INSERT INTO users (username, email, password, confirm_code, confirm) VALUES ('$username', '$email', '$pass', '$confirm_code', '0')";
        try {
            $stmt = $conn->exec($sql);
        }
        catch(PDOException $e) {
            echo $e->getMessage();
            return(-1);
        }
        if ($stmt != true) {
            $conn = null;
            return (0);
        }
        $conn = null;
        return (1);
    }
?>