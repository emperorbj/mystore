const mongoose = require('mongoose');
const Products = require('../models/products.model');


const getAllProducts = async (req,res) => {
    try{
        const { company,name } = req.query;
        const queryObject = {};
        if(company){
            queryObject.company = {$regex: company, $options: 'i'};
            console.log(queryObject)
        }

        if(name){
            queryObject.name = {$regex: name, $options: 'i'};
            console.log(queryObject)
        }

        if(featured){
            queryObject.featured = featured;
        }
        const products = await Products.find(queryObject);
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