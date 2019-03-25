const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.createUser = function(newUser, callBack){
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
          newUser.password = hash;
          newUser.save(callBack);
      });
  });
}
