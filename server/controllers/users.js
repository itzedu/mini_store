var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    index: function(req, res) {
        res.render('./../public/views/index', {title:'Welcome Page'});
    },
    index_json: function(req, res) {
        User.find({}, function(err, results){
            res.send(JSON.stringify(results));
        });
    },
    create: function(req, res) {
        var a = new User(req.body);

        a.save(function(err, results){
            if(err){
                res.send(JSON.stringify(err));
            } else {
                res.send(JSON.stringify(results));
            }
        });
    },
    destroy: function(req, res) {
        User.remove({name: req.body.name}, function(err,results){
            if(err) {
                res.send(JSON.stringify(err));
            } else  {
                res.send(JSON.stringify(results));
                console.log(JSON.stringify(results));
            }
        });
    }
}
