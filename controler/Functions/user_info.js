<?php
    function user_info($username) {
        echo '<script>console.log("test")</script>';
        include "../config/connect.php";
        $sql = "SELECT comment_choice FROM users WHERE username='$username'";
        try {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        echo '<script>console.log('.$result['comment_choice'].')</script>';
        if ($result['comment_choice'] == 1) {
            return (1);
        }
        else {
            return (0);
        }
        $conn = null;
    }
?>