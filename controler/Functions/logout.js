<?php
session_start();
$_SESSION['username'] = "";
$_SESSION = "";
session_destroy();
echo '<script>window.location.href="../index.php";</script>';
?>