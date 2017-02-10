/**
 * Created by yu on 2017/2/10.
 */

var express = require('express');

var port = process.env.PORT || 3000;

var app = express();

app.set('views','./views');//设置视图根目录

//设置模板文件后缀
app.set('view engine', 'html');
//指定html模板的渲染方法，使用ejs模板引擎
app.engine('html', require('ejs').__express);

app.listen(port);

console.log('blog is running on '+ port);

// 路由
//首页
app.get('/',function(req,res){
    res.render('index',{
        title:'首页',

    })
})
//详情页
app.get('/detail/',function(req,res){
    res.render('index',{
        title:'详情页',

    })
})
//admin首页
app.get('/admin/',function(req,res){
    res.render('index',{
        title:'后台首页',

    })
})
//admin首页
app.get('/admin/list',function(req,res){
    res.render('index',{
        title:'后台列表',

    })
})