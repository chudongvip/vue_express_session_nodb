var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 引用express-session模块
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 *  使用session模块
 *  这里不使用数据库存储session， 不使用数据库存储session， 不使用数据库存储session
 *  使用内存的session存储
 **/
app.use(session({
    secret: 'demo_test',
    name: 'mydemo',                         //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {  maxAge: 30 * 60 * 1000 },    //设置maxAge是30分钟，即30分钟后session和相应的cookie失效过期
    resave: false,                         // 每次请求都重新设置session cookie
    saveUninitialized: true                // 无论有没有session cookie，每次请求都设置个session cookie
}));

/**
 *  处理跨域请求，有点重要喔
 *  如果不涉及跨域，请忽略
 **/
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with, X_Requested_With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('X-Powered-By', '3.2.1');
    res.header('Content-Type', 'application/json; charset=utf-8');

    if (req.method === 'OPTIONS') {
        res.end('options ok');
    } else {
        next();
    }
});

/**
 *  中间件
 *  接口请求之后，更新session的时间
 *  use this middleware to reset cookie expiration time
 *  when user hit page every time
 **/
app.use(function (req, res, next) {
    req.session._garbage = Date();
    req.session.touch();
    next();
});

app.use('/', index);
/**
 *  我们的登录就写在这里面
 **/
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
