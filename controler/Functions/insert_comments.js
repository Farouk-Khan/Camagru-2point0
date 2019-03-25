<?php
include 'user_info.php';
include 'mail_comment.php';
include "../config/connect.php";
    session_start();
    if (isset($_POST['image_id'])) {
        $image_id = $_POST['image_id'];
    }
    $username = $_SESSION['username'];
    if (isset($_POST['username_image'])) {
        $user_image = htmlspecialchars($_POST['username_image']);
    }
    if (isset($_POST['comment'])) {
        $comment = htmlspecialchars($_POST['comment']);
    }
    if (empty($comment) ==  true)
    {
        echo '<script>window.location.href="comments.php";</script>';
    }
    else
    {
        $sql = "INSERT INTO comments (pic_id,username, comment) VALUES ('$image_id','$username','$comment')";
        try {
            $conn->exec($sql);
            if (user_info($username) == '1'){
                mail_comment($user_image, $username, $comment, $image_id);
            }
        }
        catch (PDOException $e)
        {
            echo $e->getMessage();
        }
        $conn = null;
        echo '<script>window.location.href="";</script>';
    }
?>