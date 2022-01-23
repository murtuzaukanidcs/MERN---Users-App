const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();

const loginModel = require("../model/login")

/** Register user */
router.post("/", (req, res) => {
    const newRegister = req.body;
    loginModel.findOne({ email: newRegister.email, password: newRegister.password }, (err, user) => {
        if (user) {
            console.log("Login User");
            res.send({ message: "User found successfully! Now you can login", user: user })
        } else {
            console.log("No user found");
            res.send({ message: "Sorry! No User found! Invalid login" })
        }
    })
})

module.exports = router