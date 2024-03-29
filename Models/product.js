const { getDb } = require("../util/database");
const mongodb = require("mongodb");
class Product {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.image = product.image;
    this.category = product.category;
    this.brand = product.brand;
    this.rating = product.rating;
    this.numReviews = product.numReviews;
    this.countInStock = product.countInStock 
    this.createdAt = new Date();
    this._id = product.id ? new mongodb.ObjectId(product.id) : null;
  }
  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      this.updatedAt = new Date();
      console.log("update the product");
      dbOp = db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("products").insertOne(this);
    }
    return dbOp
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(productId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(productId) })
      .next()
      .then((product) => {
        console.log(product);
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static delete(productId) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(productId) });
  }
}
module.exports = Product;
