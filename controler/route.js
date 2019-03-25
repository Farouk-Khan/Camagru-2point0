var imports = require("./imports");
var User = require("../models/user.js")

module.exports = function(app, urlencodedParser){
  app.get("/", function(req, res){
    var error = "none";
    res.render("login", {error: error});
  });

  app.get("/home", function(req, res){
    res.render("home");
  });

  app.post("/sign_up", urlencodedParser, function(req, res){
    var name = req.body.username;
    var email = req.body.email;
    var password1 = req.body.password1;
    var password2 = req.body.password2;

    var error = "Your passwords do not match";
    if (password1 !== password2){
      res.render("login", {error: error});
      console.log("Error");
    } else {
      // imports.sign_up(name, email, password1);
      var newUser = new User({
        name: name,
        email: email,
        password: password1,
        status: 0
      });

      User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log(user);
      });
      error = "You can now log in!!";
      res.render("login", {error: error});
    }
  });

  app.post("/login", urlencodedParser, function(req, res){
    
  });
};
