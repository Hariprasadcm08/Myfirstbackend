const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authorisationMW= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authorisationMW.auth,userController.getUserData)
router.put("/users/:userId", authorisationMW.auth,userController.updateUser)
router.delete('/users/:userId',authorisationMW.auth, userController.deleteUser)

module.exports = router;


























//router.post("/users/:userId/posts",authorisationMW.auth,userController.postMessage)