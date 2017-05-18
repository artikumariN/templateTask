var mongoose      = require('mongoose'),
    template      = mongoose.Schema({
  template  : String,
  deleted   : Number
});
var template  =  mongoose.model("template", template);
module.exports=template;
