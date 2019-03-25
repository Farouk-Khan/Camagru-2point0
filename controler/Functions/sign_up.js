// var insert_user = require('./insert_user');
// var email_match = require('./email_match');
// var username_match = require('./username_match');
// var confirm_email = require('./confirm_email');
// var MongoClient = require('mongodb').MongoClient,format = require('util').format;;
// var url = 'mongodb://localhost/test';
//
// module.exports = function(name, email, password){
//     console.log(name);
//     console.log(email);
//     console.log(password);
//
//     // - inserting data into a collection
//     MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("test");
//       var myobj = [{ name: name, email: email, password: password}];
//       dbo.collection("customers").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//       });
//     });
// };
    // $email = $_POST['email'];
    // $pass = htmlspecialchars($_POST['pass']);
    // $confirm = htmlspecialchars($_POST['confirm']);
    //
    // if (strlen($pass) < 8 || !(preg_match('/\\d/', $pass) > 0) || !(preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $pass) > 0)) {
    //     echo ('<script>alert ("Password is too weak or may not contain digits/special characters.");window.location.href="../index.php?signup=weak&username='.$username.'&email='.$email.'";</script>');
    //     exit();
    // }
    // elseif (strlen($username) < 3) {
    //     echo ('<script>alert ("Username is too short");window.location.href="../index.php?signup=name&email='.$email.'";</script>');
    //     exit();
    // }
    // elseif ($pass != $confirm) {
    //     echo ('<script>alert ("Password does not match");window.location.href="../index.php?signup=pass&username='.$username.'&email='.$email.'";</script>');
    //     exit();
    // }
    // elseif (username_match($username) == 1) {
    //     echo ('<script>alert ("Username is taken");window.location.href="../index.php?email='.$email.'";</script>');
    //     exit();
    // }
    // elseif (email_match($email) == 1) {
    //     echo ('<script>alert ("Email already exists or is invalid");window.location.href="../index.php?username='.$username.'";</script>');
    //     exit();
    // }
    // elseif (insert_user($username, $email, hash('whirlpool', $confirm)) == 1) {
    //     confirm_email($username, $email);
    //     echo ('<script>alert ("Account Accepted");window.location.href="../index.php?uname='.$username.'";</script>');
    //     exit();
    // }
    // else {
    //     echo('<script>alert ("Failed to enter details");window.location.href="../index.php";</script>');
    //     exit();
    // } -->
