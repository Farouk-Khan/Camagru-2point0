<?php
function get_comments($pic_id)
{
    include "../config/connect.php";
    $sql = "SELECT * FROM comments WHERE pic_id='$pic_id' ";
    try {
        $stmt = $conn->prepare($sql);
        $stmt->execute();
    }
    catch(PDOException $e) {
        echo $e-getMessage();
    }
    if ($stmt->rowCount() > 0)
        return ($stmt->fetchAll());
    else
        return (0);
}
?>