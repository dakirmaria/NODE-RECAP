const products = []


exports.getAllProducts = (req, res, next) => {
    res.send(products);
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/products');
  };
  