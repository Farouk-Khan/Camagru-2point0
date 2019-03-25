<?php
    if ($_SESSION['username'] == "" ||empty($_SESSION)) {
    echo '<script>alert("Please login or create an account first!!!!");window.location.href="../index.php";</script>';
    }
    else {
    session_start();
    }
    $username = htmlspecialchars($_POST['username']);
    $pass = hash('whirlpool', htmlspecialchars($_POST['pass']));
    include "verify.php";
    include "change_password.php";
    include "delete_account.php";
    include "change_user.php";
    include "change_email.php";
    include "comment_option.php";
    if (verify($username, $pass) == 1) {
        if ($_POST['submit_delete_account'] == OK)
        {
            delete_account($username, $pass);
            $_SESSION['username'] = "";
            $_SESSION = "";
            session_destroy();
            echo '<script>alert("Account deleted");window.location.href="../index.php";</script>';
        } 
        if (htmlspecialchars($_POST['new_username_account']) != "")
        {
            $new_username = htmlspecialchars($_POST['new_username_account']);
            change_user($username, $pass, $new_username);
            $username = $new_username;
        }
        if (htmlspecialchars($_POST['new_email_account']) != "")
        {
            $new_email = htmlspecialchars($_POST['new_email_account']);
            change_email($username, $pass, $new_email);
        }
        if (htmlspecialchars($_POST['new_password_account']) != "")
        {
            $new_password = hash('whirlpool', htmlspecialchars($_POST['new_password_account']));
            if (strlen($new_password) < 8 || !(preg_match('/\\d/', $new_password) > 0) || !(preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $new_password) > 0))
                {
                    echo('<<script>alert ("Password too short or does not contain a digit or/and special character!!!");window.location.href="../home.php";</script>');
                }
            change_password($username, $new_password);
            $pass = $new_password;
        }
        if ($_POST['comment_option'] != "")
        {
            $new_comment_option = $_POST['comment_option'];
            change_comment_option($new_comment_option, $username);
        }
        echo('<script>alert ("Details changed redirecting to main page.!!!");window.location.href="../home.php";</script>');
    }
    else
    {
        echo('<script>alert ("Username/password incorrect, please ensure details are correct.!!!");window.location.href="../home.php";</script>');
    }
?>