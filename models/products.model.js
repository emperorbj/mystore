const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    company:{
        type: String
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 3.5
    },
    imageUrl:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
},{
    timestamps: true
})

const Products = mongoose.model("Product",productSchema);
module.exports = Products;