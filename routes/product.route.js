const express = require('express');
const { getAllProducts, getProductById, addNewProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');
const productRouter = express.Router();

productRouter.get('/',getAllProducts);
productRouter.get('/:id',getProductById);
productRouter.post('/add',addNewProduct);
productRouter.put('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct);






module.exports = productRouter;