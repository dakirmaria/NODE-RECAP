const express = require('express');

const router = express.Router();
const userServices = require('../services/user');
router.get("/", userServices.getAllUsers);
router.get("/:userId", userServices.getUserById)
router.post("/add-user", userServices.postUser)


module.exports = router;