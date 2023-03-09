const { getDb } = require("../util/database");
const mongodb = require("mongodb");
class User {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.job = user.job;
    this.age = user.age;
    this.phone = user.phone;

  }
  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new mongodb.ObjectId(userId) })
      .next()
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection("users")
      .find()
      .toArray()
      .then((users) => {
        console.log(users);
        return users;
      })
      .catch((err) => {
        console.log(err);
      });

  }
}
module.exports = User;