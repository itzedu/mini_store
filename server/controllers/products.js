var mongoose = require('mongoose')
var Product = mongoose.model('Product');

module.exports = {
    index_json: function(req, res) {
        Product.find({}, function(err, results){
            res.send(JSON.stringify(results));
        });
    },
    create: function(req, res){
        var a = new Product(req.body);
        a.save(function(err,results){
            if(err){
                res.send(JSON.stringify(err));
            } else {
                res.send(JSON.stringify(results));
            }
        });
    },
}
