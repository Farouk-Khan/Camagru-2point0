<?php
    function change_comment_option($new_comment_option, $username) {
        include "../config/connect.php";
        $sql = "SELECT * FROM users WHERE username='$username'";
        try {
            $stmt = $conn->query($sql);
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
        if ($stmt->rowCount() > 0) {
            $sql1 = "UPDATE users SET comment_choice='$new_comment_option' WHERE username='$username'";
            try {
                $stmt1 = $conn->prepare($sql1);
                $stmt1->execute();
            }
            catch(PDOException $e) {
                echo $e->getMessage();
            }
            if ($new_comment_option == '0') {
                echo('<script>alert ("You will no longer recieved comments by email.");window.location.href="../home.php";</script>');
            }
            else{
                echo('<script>alert ("You will now recieve comments by email.");window.location.href="../home.php";</script>');
            }
        }
        $conn = null;
    }
?>