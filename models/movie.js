/**
 * Created by yu on 2017/2/10.
 */

var mongoose = require('mongoose');

var movieSchema = require('../schemas/movie');//引入模式

var Movie = mongoose.model('Movie',movieSchema);//创建模型

module.exports = Movie;//导出模型