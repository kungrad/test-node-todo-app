var mongoose = require('mongoose');

var User = mongoose.model('User', {
  text: {
    type: String
  }
});

module.exports = {User};
