const express = require('express');
const { getAllProducts, getProductById } = require('../controllers/products.controller');
const productRouter = express.Router();

productRouter.get('/',getAllProducts);
productRouter.get('/:id',getProductById);
// productRouter.post();
// productRouter.put();






module.exports = productRouter;