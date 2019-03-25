<?php
session_start();
include "../config/connect.php";
$username = $_SESSION['username'];
$image_id = $_POST['delete_butt'];
$pag = $_POST['pag'];
$true_username = $_POST['true_username'];

echo $pag;
echo 'hey';

if ($username != $true_username){
    echo('<script>alert ("This image is not yours to delete");window.location.href="../home.php?pagination='.$pag.'";</script>');
}else{
    $sql = "DELETE FROM pictures WHERE username='$username' and pic_id='$image_id'";
    try {
        $conn->exec($sql);
    }
    catch (PDOException $e)
    {
        echo $e->getMessage();
    }
    $conn = null;
    echo('<script>window.location.href="../home.php?pagination='.$pag.'";</script>');
}
?>