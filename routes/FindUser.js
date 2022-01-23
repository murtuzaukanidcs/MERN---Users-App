const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const userModel = require('../model/login');
router.post("/", async(req, res) => {
    const userData = req.body;
    userModel.find({ name: userData.name }, (err, user) => {
        if (user.length > 0) {
            res.send({ user: user })
            console.log(user);
        } else {
            res.send({ user: [] })
            console.log("No! data found");
        }
    });
})

module.exports = router