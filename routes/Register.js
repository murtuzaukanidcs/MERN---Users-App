const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();

const loginModel = require("../model/login")

/** Register user */
router.post("/", (req, res) => {
    const newRegister = req.body;
    // return;
    loginModel.findOne({
        "email": newRegister.email
    }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
            console.log("This email ID is already exist")
        } else {
            loginModel.create(newRegister);
            res.send({ message: "User Registered successfully" })
            console.log("User Registered successfully");
        }
    })
})

/** Update user */
router.put("/", (req, res) => {
    const updatedUserData = req.body;
    loginModel.findByIdAndUpdate(updatedUserData.id, { name: updatedUserData.name, email: updatedUserData.email, password: updatedUserData.password }, (err, docs) => {
        if (err) {
            console.log(err);
            res.send({ message: err })
        } else {

            console.log("User updated successfully");
            res.send({ message: "User updated successfully" })
        }
    });
})

router.delete("/:id", async(req, res) => {
    const deletedID = req.params.id
    loginModel.findByIdAndDelete(deletedID, (err, docs) => {
        if (err) {
            res.send({ message: "There is problem in delete" });
            console.log(err);
        } else {
            res.send({ message: "Your account is deleted success" });
            console.log("User deleted successfully");
        }
    });
})

module.exports = router