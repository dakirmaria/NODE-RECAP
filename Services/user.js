const User = require("../Models/user");

exports.getAllUsers = (req, res, next) => {
  User.fetchAll()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      throw err;
    });
};

exports.getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUser = (req, res, next) => {
  const userObj = {
    name: req.body.name,
    email: req.body.email,
  };
  const user = new User(userObj);
  user
    .save()
    .then((user) => {
      console.log("user created");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send(user);
};
