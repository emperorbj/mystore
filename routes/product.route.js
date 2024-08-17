const express = require('express');
const { getAllProducts } = require('../controllers/products.controller');
const productRouter = express.Router();

productRouter.get('/',getAllProducts);
productRouter.get();
productRouter.post();
productRouter.put();






module.exports = productRouter;