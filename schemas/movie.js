/**
 * Created by yu on 2017/2/10.
 */

var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    doctor:String,
    title:String,
    language:String,
    country:String,
    summary:String,
    flash:String,
    poster:String,
    year:Number,
    meta:{
        createAt:{
            type:Date,
            default:Data.now()
        },
        updateAt:{
            type:Date,
            default:Data.now()
        }
    }
});

//为模式添加保存前执行方法

MovieSchema.pre('save',function(next){
    //如果数据是新增，那么创建两个时间，如果不是新增，是更新，那么只更新编辑时间
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }else{
        this.meta.updateAt = Date.now();
    }
    //继续执行
    next();
});

//定义静态方法，只有经过模型编译并且实例化之后，就会有这些方法
MovieSchema.statics = {
    //获取数据库中所有的数据，并按更新时间排序
    fetch:function(cb){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)

    },
    //通过id获取数据
    findById:function(cb){
        return this
            .findOne({_id:id})
            .exec(cb)
    }
}
module.exports = MovieSchema;