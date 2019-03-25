<?php
    include '../config/connect.php';
    function get_images_user($username)
    {
        $sql = "SELECT * FROM pictures WHERE username='$username' ORDER BY pic_id desc";
        try {
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        }
        catch(PDOExcepiton $e) {
            echo $e->getMessage();
        }
        if ($stmt->rowCount() > 0)
            return $stmt->fetchAll();
        else
            return (0);
    }
?>