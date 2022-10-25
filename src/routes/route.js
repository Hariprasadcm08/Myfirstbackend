const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const BookModel= require("../models/bookmodels.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.post("/createBook", BookController.createBook  )

router.get("/getUsersData", UserController.getUsersData)
router.get("/getBookData", BookController.getBookData)

module.exports = router;