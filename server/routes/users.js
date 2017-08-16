var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.views) {
      req.session.views++;
      res.send('第 ' + req.session.views + ' 次访问');
  } else {
      req.session.views = 1;
      res.send('欢迎您，请刷新试试');
  }
});


router.get('/home', function (req, res, next) {
    console.log(req.session.id);
    if (req.session.token) {
        res.send(req.session.token)
    } else {
        res.send('授权过期重新登录')
    }
});

/**
 *  登录
 **/
router.post('/login', function (req, res) {
    let _body = req.body,
        _pwd = typeof _body.pwd === 'string' ? _body.pwd : _body.pwd.toString(),
        _phone = typeof _body.telphone === 'string' ? _body.telphone : _body.telphone.toString();

    if (_phone === '' || _phone === undefined) {
        res.send({
            code: 3003,
            errmsg: '手机号为空'
        });
        return
    }

    if (_pwd === '' || _pwd === undefined) {
        res.send({
            code: 3001,
            errmsg: '密码为空'
        });
        return
    }

    // 查询数据库，比对数据
    let phone = '10086';
    let pwd = '123456';

    if (_phone !== phone) {
        res.send({
            code: -1,
            errmsg: '账号不存在'
        });
        return
    }

    if (_pwd !== pwd) {
        res.send({
            code: 3004,
            errmsg: '密码错误'
        })
    } else {
        req.session.token = _phone + '_' + redomToken();
        console.log(req.session.token);
        res.send({
            code: 200,
            token: req.session.token,
            errmsg: '登录成功'
        })
    }

    function redomToken(len) {
        var len = len || 32;
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxpos = chars.length;
        var str = '';

        for (var i=0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxpos))
        }

        return str;
    }
});

/**
 *  退出
 **/
router.post('/signout', function (req, res) {
    req.session.token = null;
    res.send({
        c: 200,
        m: '感谢使用！'
    });
});

module.exports = router;
