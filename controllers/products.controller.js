const mongoose = require('mongoose');
const Products = require('../models/products.model');


const getAllProducts = async (req,res) => {
    try{
        const products = await Products.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}



const getProductById = async (req,res) => {
    try{
        const id = req.params.id;
        const product = await Products.findById(id);
        if(!product){
            return res.status(404).json({message: error.message})
        }
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllProducts,
    getProductById
}