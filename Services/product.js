const Product = require("../Models/product");

exports.getAllProducts = (req, res, next) => {
    const products = Product.fetchAll();
    
    res.send(products);
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/products');
  };
  