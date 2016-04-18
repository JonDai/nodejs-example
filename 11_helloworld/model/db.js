/**
 * Created by JonDai on 2016/4/18.
 * 连接数据库文件
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');

var db = mongoose.connection;

//为连接绑定事件监听
db.on('connected' , function () {
    console.log('Mongoose connected to: localhost');
});

db.on('error' , function (err) {
    console.log('Mongoose error! ' + err);
});

db.on('disconnected' , function () {
    console.log('Mongoose disconnected from: localhost');
});

exports.mongoose = mongoose;