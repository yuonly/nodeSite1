/**
 * Created by yu on 2017/2/10.
 */

var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;

var app = express();

app.set('views','./views');//设置视图根目录
//设置静态资源路径
app.use(express.static(path.join(__dirname,'lib')));

//设置模板文件后缀
app.set('view engine', 'html');
//指定html模板的渲染方法，使用ejs模板引擎
app.engine('html', require('ejs').__express);

app.use(express.bodyParser());//为了解析后台提交的post数据

app.listen(port);

console.log('blog is running on '+ port);

//公共数据分配
app.use(function(req,res,next){
    res.locals.title = '默认';
    next();
})

// 路由
//首页
app.get('/',function(req,res){
    res.render('pages/index',{
        title:'首页',
        movies:[
            {
                title:'机械战警',
                _id:1,
                poster:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3762907085,3506712346&fm=80&w=179&h=119&img.JPEG'
            },
            {
                title:'机械战警',
                _id:2,
                poster:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3762907085,3506712346&fm=80&w=179&h=119&img.JPEG'
            },
            {
                title:'机械战警',
                _id:3,
                poster:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3762907085,3506712346&fm=80&w=179&h=119&img.JPEG'
            },
            {
                title:'机械战警',
                _id:4,
                poster:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3762907085,3506712346&fm=80&w=179&h=119&img.JPEG'
            }
        ]

    })
})
//详情页
app.get('/detail/',function(req,res){
    res.render('pages/detail',{
        title:'详情页',

    })
})
//admin首页
app.get('/admin/',function(req,res){
    res.render('pages/admin',{
        title:'后台首页',

    })
})
//admin列表
app.get('/admin/list',function(req,res){
    res.render('pages/list',{
        title:'后台列表',
        movies:[
            {
                title:'机械战警',
                _id:1,
                doctor:'何塞',
                country:'美国',
                year:2014,
                language:'英语',
                poster:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3762907085,3506712346&fm=80&w=179&h=119&img.JPEG'
            },
            {
                title:'机械战警',
                _id:2,
                doctor:'何塞',
                country:'美国',
                year:2014,
                language:'英语',
                poster:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3762907085,3506712346&fm=80&w=179&h=119&img.JPEG'
            }
        ]

    })
})