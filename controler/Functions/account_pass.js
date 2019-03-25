<!DOCTYPE HTML>
<?php
    if(session_id() == '' || !isset($_SESSION)){
        session_start();
      }
?>
<html>
    <head>
        <title>
            Camagru
        </title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../main.css">
    </head>
    <body>
        <div class="offset">
            <div class="logo">
                <h1>Welcome to Camagru</h1>
            </div>
            <div class="logHold">
                <div class="group">
                        <h2>Change your password</h2>
                    <form method="POST" action="update_pass.php">
                        <label class="log" for="user"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required>
                        <label class="log" for="pass"><b>Password reset</b></label>
                        <input type="password" placeholder="Enter password" name="pass" required>
                        <button type="submit" name="login">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
