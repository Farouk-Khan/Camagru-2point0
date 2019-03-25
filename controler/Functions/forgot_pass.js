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
                        <h2>Forgot your Password?</h2>
                    <form method="POST" action="reset_pass.php">
                        <label class="log" for="user"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required>
                        <label class="log" for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter email" name="email" required>
                        <button type="submit" name="login">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
