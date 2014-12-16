var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name:  String,
    image_url: String,
    description: String,
    initial_quantity: Number,
    created_at: { type: Date, default: Date.now },
});
ProductSchema.path('name').required(true, 'Product Name cannot be blank');
ProductSchema.path('image_url').required(true, 'Image cannot be blank');
ProductSchema.path('description').required(true, 'Description cannot be blank');
ProductSchema.path('initial_quantity').required(true, 'Quantity cannot be blank');
mongoose.model('Product', ProductSchema);