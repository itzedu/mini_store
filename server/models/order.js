var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
  customer_name:  String,
  product_name: String,
  quantity: Number,
  date: { type: Date, default: Date.now },
});
OrderSchema.path('customer_name').required(true, 'Customer name cannot be blank');
OrderSchema.path('product_name').required(true, 'Product name cannot be blank');
mongoose.model('Order', OrderSchema);