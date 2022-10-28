const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        unique: true,
    },
    img: {
        type: String,
        required: [true, 'Image is required'],
    },
    categories: {
        type: Array,
        required: [true, 'Categories is required'],
    },
    size: {
        type: String,
        required: [true, 'Size is required'],
    },
    color: {
        type: String,
    },
    price:{
        type: Number,
    }
},{timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);