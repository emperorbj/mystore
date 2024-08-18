const mongoose = require('mongoose');
const Products = require('../models/products.model');


const getAllProducts = async (req,res) => {
    try{
        const { company,name,featured,sort, select } = req.query;
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

        let apiData = Products.find(queryObject);


        if(sort){
            let sortFix = sort.replace(","," ");
            queryObject.sort = sortFix;
            apiData = apiData.sort(sortFix);
        }


        if(select){
            let selectFix = select.split(",").join(" ");
            queryObject.select = selectFix;
            apiData = apiData.select(selectFix);
        }

        const products = await apiData;
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


const addNewProduct = async (req,res) =>{
    try{
        const product = await Products.create(req.body);
        res.status(201).json(product);

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


const updateProduct = async (req,res) => {
    try{
        const id = req.params.id
        const product = await Products.findByIdAndUpdate(id, req.body)

        if(!product){
            return res.status(404).json({message: "Product not found"})
        }

        const updatedProduct = await Products.findById(id)
        res.status(200).json(updatedProduct)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct
}