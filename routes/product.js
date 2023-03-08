const express = require('express');
const productServices = require('../services/product');

const router = express.Router();
router.get('/', productServices.getAllProducts);
router.get('/:productId', productServices.getProductById);
router.post('/add-product', productServices.postAddProduct);

module.exports = router;