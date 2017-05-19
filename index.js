/**
 * Module dependencies.
 */
var  serve   = require('koa-static'),
    logger   = require('koa-logger'),
    route    = require('koa-route'),
    views    = require('co-views'),
    parse    = require('co-body'),
    koa      = require('koa'),
    app      = koa(),
    moongoose = require('moongoose'),
    db        = require('./config/db'),
    model     = require('./config/model'),
    bodyParser = require('koa-body-parser');

// middleware
app.use(logger());
app.use(serve('./public'));
app.use(serve('./node_modules'));
app.use(serve('./bower_components'));
app.use(bodyParser());
//app.use(parse());

// app.use(function *() {
//   this.body = this.request.body; // Echo request back
//   this.status = 200;
// });


//Specifying Swig view engine
var render= views(__dirname + '/public/views', { map: { html: 'swig' }});


// route middleware

//Default view route
app.use(route.get('/', list));

function *list() {
  this.body = yield render('index');
}


//find Data route
app.use(route.get('/people', getPeople));

function *getPeople(next){
    var self = this;
     var response = yield model.find({});
    self.body = response;
}


//Add New Temlate route

app.use(route.post('/addNewTemplate',function *(next){
   this.body = this.request.params;
   this.status = 200;
    //this.body="hello";
}));


// http server listening
app.listen(3000);
console.log('listening on port 3000');
