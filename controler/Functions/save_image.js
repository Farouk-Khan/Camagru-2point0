<?php
function save_image($username, $image) {
    include "../config/connect.php";
    $sql = "INSERT INTO pictures (username, picture, likes) VALUE ('$username', '$image', '0')";
    try {
        $conn->exec($sql);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
        return (0);
    }
    $conn = null;
    return (1);
}
?>