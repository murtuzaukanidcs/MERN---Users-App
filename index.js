const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(express.Router())

/** Create DB */
mongoose.connect("mongodb://localhost:27017/userAppDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected");
});
const port = 6468

/** User Login routes */
const loginRoutes = require("./routes/Login");
app.use('/login', loginRoutes)

const findUserRoutes = require("./routes/FindUser");
app.use('/findUser', findUserRoutes)

const registerRoutes = require("./routes/Register");
app.use('/register', registerRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))