/**
 * Module dependencies.
 */
var  serve   = require('koa-static'),
    logger  = require('koa-logger'),
    route   = require('koa-route'),
    views   = require('co-views'),
    parse   = require('co-body'),
    koa     = require('koa'),
    app     = koa(),
    moongoose = require('moongoose'),
    db      = require('./config/db'),
    model     = require('./config/model');


// middleware
app.use(logger());

app.use(serve('./public'));
app.use(serve('./node_modules'));
app.use(serve('./bower_components'));

// route middleware
app.use(route.get('/', list));
//Specifying Swig view engine
var render= views(__dirname + '/public/views', { map: { html: 'swig' }});

//find Data
app.use(route.get('/people', getPeople));

function *getPeople(next){
    var self = this;
     var response = yield model.find({});
    self.body = response;
}

function *list() {
  this.body = yield render('index');
}

// http server listening
app.listen(3000);
console.log('listening on port 3000');
