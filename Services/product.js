const Product = require("../Models/product");
const ProductBuilder = require("../Builders/productBuilder");
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
  const productObj = new ProductBuilder(req.body.id)
    .withName(req.body.name)
    .withPrice(req.body.price)
    .withDescription(req.body.description)
    .withImage(req.body.image)
    .withCategory(req.body.category)
    .withBrand(req.body.brand)
    .withRating(req.body.rating)
    .withNumReviews(req.body.numReviews)
    .withCountInStock(req.body.countInStock)
    .build();
   const product = new Product(productObj);
  product
    .save()
    .then((result) => {
      console.log("created/updated product");
    })
    .catch((err) => {
      console.log(err);
    }); 
  res.send(product);
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.delete(productId)
    .then(res.send("Product deleted successfully"))
    .catch((err) => console.log(err));
};
