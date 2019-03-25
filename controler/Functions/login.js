
    session_start();
    include "verify.php";
    $username = htmlspecialchars($_POST['user']);
    $pass = htmlspecialchars($_POST['con_pass']);
    if (verify($username, hash('whirlpool', $pass))) {
        $_SESSION['username'] = $username;
        echo '<script>window.location.href="../home.php?pagination=1"</script>';
    }
    else {
        echo '<script>alert ("Unable to login due to incorrect username or password");window.location.href="../index.php"</script>';
    }
