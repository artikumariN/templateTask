var mongoose      = require('mongoose'),

    user   =  mongoose.Schema({
    name      : String,
    age       : Number,
    email     : String,
    mobile    : Number,
    profile   : String
});

var user     =  mongoose.model("user", user);

module.exports=user;
