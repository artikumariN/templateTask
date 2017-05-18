var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/users');

module.exports=connection;
