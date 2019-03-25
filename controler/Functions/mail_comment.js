<?php
function mail_comment($user, $username, $comment, $pic_id)
{
    include "../config/connect.php";

    $sql = "SELECT * FROM users WHERE username='$user'";
    try {
        $stmt = $conn->prepare($sql);
        $stmt->execute();
    }
    catch (PDOException $e)
    {
        echo $e->getMessage();
        return (0);
    }
    if ($stmt->rowCount() > 0)
    {
        echo '<script>console.log("pizza")</script>';
        $res = $stmt->fetchAll();
        $subject = "Alert form comment on ".$pic_id;
        $headers = "From : no_reply@camagru.com \r\n";
        $message = "Your picture ".$pic_id." was commented on by ".$username."\r\n
                    ".$comment;
        $to = $res[0]['email'];
        $sent = mail($to, $subject, $message, $headers);
    }
    echo '<script>console.log("mail second")</script>';
}
?>