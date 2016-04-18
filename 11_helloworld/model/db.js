/**
 * Created by JonDai on 2016/4/18.
 * 连接数据库文件
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');

exports.mongoose = mongoose;
