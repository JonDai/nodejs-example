/**
 * Created by JonDai on 2016/4/18.
 */
var Movie = require('./../model/movie');

exports.movieAdd = function (req ,resp) {
    if(req.params.name){
        //update
        return resp.render('movie', {
            title:req.params.name +'|电影|管理|movie.me',
            label: '编辑电影'+req.params.name,
            movie: req.params.name
        });
    }else{
        //add
        return resp.render('movie' , {
            title: '新电影|电影|管理|movie.me',
            label: '新增电影',
            movie: false
        });
    }
};

exports.doMovieAdd = function (req , resp) {
    console.log(req.body.content);
    var json = req.body.content;
    if(json._id){
        resp.send({'success':false,'err':"已经有了"});
    }else{
        //insert 如果是Entity，使用save方法，如果是Model，使用create方法
        Movie.save(json , function (err) {
            if(err) {
                resp.send({'success':false,'err':err});
            } else {
                resp.send({'success':true});
            }
        });
    }
};

exports.movieJSON = function (req , resp) {
    Movie.findByName(req.params.name , function (err , obj) {
        resp.send(obj);
    });
};

