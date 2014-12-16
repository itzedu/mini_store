var mongoose = require('mongoose')
var Order = mongoose.model('Order');

module.exports = {
    index_json: function(req, res) {
        Order.find({}, function(err, results){
            res.send(JSON.stringify(results));
        });
    },
    create: function(req, res) {
        var a = new Order(req.body);
        console.log('came to saduasdsa');
        a.save(function(err,results){
            if(err){
                res.send(JSON.stringify(err));
            } else {
                res.send(JSON.stringify(results));
            }
        });
    },
}
