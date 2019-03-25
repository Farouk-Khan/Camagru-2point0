<?php
    function buffer($image) {
        ob_start();
        imagepng($image);
        $image_data = ob_get_contents();
        ob_end_clean();
        return "data:image/png;base64,".base64_encode($image_data);    
    }

    session_start();
    include "save_image.php";
    $file = '../images/tmp.png';
    $base64 = str_replace('data:image/png;base64,', '',$_POST['image']);
    $username = $_SESSION['username'];

    $holder = fopen($file, "wb");
    fwrite($holder, base64_decode($base64));
    fclose($holder);
    $image = imagecreatefrompng($file);
    $sticker = imagecreatefrompng($_POST['image_2']);
    imagealphablending($image, false);
    imagesavealpha($image, true);
    imagecopymerge($image, $sticker, 0, 0, 0, 0, 200, 200, 100);
    $img = buffer($image);
    if (save_image($username, $img) == 1) {
        echo '<script>window.location.href="../home.php?pagination=1"</script>';
    }
    else {
        echo '<script>alert ("Could not save image");window.location.href="../home.php?pagination=1"</script>';
    }
?>