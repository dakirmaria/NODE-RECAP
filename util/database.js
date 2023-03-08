const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();

const mongoConnect = (callback) => {
MongoClient.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@samsantech.etewulv.mongodb.net/shop?retryWrites=true&w=majority`
)
  .then((client) => {
    console.log("Connected To Database!");
    _db = client.db(); //client.db() is used to connect to the specific database
    callback();
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

}
const getDb = () => {
    if (_db) {
        return _db; //returning the access to the database
    }
    throw "No Database Found!";
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;