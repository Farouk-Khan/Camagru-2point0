<?php
    $image_id = $_POST['like_but'];
    $pag = $_POST['pag'];
    include "../config/connect.php";
    $sql = "UPDATE pictures SET Likes= Likes+1 WHERE pic_id='$image_id' ";
    try {
        $stmt = $conn->prepare($sql);
        $stmt->execute();
    }
    catch (PDOException $e)
    {
        echo $e->getMessage();
    }
    $conn = null;
    echo '<script>window.location.href="../home.php?pagination='.$pag.'";</script>';
?>