/**
 * Created by JonDai on 2016/4/18.
 */
var mongodb = require('./db');
var Schema = mongodb.mongoose.Schema;

var movieSchema = new Schema({
    name: String,
    alias: [String],
    publish: Date,
    create_date: {type: Date , default: Date.now()},
    images: {coverSmall: String , coverBig: String},
    source :[{
        source:String,
        link:String,
        swfLink:String,
        quality:String,
        version:String,
        lang:String,
        subtitle:String,
        create_date : { type: Date, default: Date.now }
    }]
});

var Movie = mongodb.mongoose.Model("Movie", movieSchema);
var MovieDao = function () {};
module.exports = new MovieDao();
