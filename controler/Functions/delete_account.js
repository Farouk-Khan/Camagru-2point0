<?php
function delete_account($username, $pass) {
    include "../config/connect.php";
    $sql = "DELETE FROM users WHERE username='$username' AND password='$pass'";
    try {
        $conn->exec($sql);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
        return(0);
    }
    $conn = null;
    return(-1);
}
?>