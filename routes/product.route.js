const express = require('express');
const { getAllProducts, getProductById, addNewProduct, updateProduct } = require('../controllers/products.controller');
const productRouter = express.Router();

productRouter.get('/',getAllProducts);
productRouter.get('/:id',getProductById);
productRouter.post('/add',addNewProduct);
productRouter.put('/update',updateProduct);






module.exports = productRouter;