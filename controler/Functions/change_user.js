<?php
function change_user($username, $pass, $new_username) {
    include "../config/connect.php";
    $sql = "SELECT * FROM users WHERE username='$username' AND password='$pass'";
    try {
        $stmt = $conn->query($sql);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
    if ($stmt->rowCount() > 0) {
        $sql1 = "UPDATE users SET username='$new_username' WHERE password='$pass' AND username='$username'";
        try {
            $stmt1 = $conn->prepare($sql1);
            $stmt1->execute();
        }
        catch(PDOException $e) {
            echo $e->getMessage();
        }
        echo '<script>alert ("Your username was successfully changed");window.location.href="../home.php"</script>';
    }
}
?>