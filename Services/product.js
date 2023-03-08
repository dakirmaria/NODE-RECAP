const Product = require("../Models/product");

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => res.send(products))
    .catch((err) => {
      console.log(err);
    });
};
exports.getProductById = (req, res, next) => {
  const productId = req.params.productId; 
  Product.findById(productId)
    .then((product) => res.send(product))
    .catch((err) => {
      console.log(err);
    });
};

exports.postAddProduct = (req, res, next) => {
  const productObj = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
  };
  const product = new Product(productObj);
  product
    .save()
    .then((result) => {
      console.log("created product");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/products");
};
