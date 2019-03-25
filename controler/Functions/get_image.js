<?php
    function get_images()
    {
        include 'config/connect.php';
        $sql = "SELECT * FROM pictures ORDER BY pic_id desc";
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