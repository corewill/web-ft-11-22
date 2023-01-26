const express = require("express")
const app = express()
const PORT = 3023
const bcrypt = require("bcrypt")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");


app.use(express.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialize: true,
    cookie: {
        secure: false,
        maxAge: 2592000000
    }
}))
app.set("view engine", "ejs")

app.get("/login", (req, res) => {
    res.render("pages/login")
})
app.post("/login", (req, res) => {
    const {username, password} = req.body
    console.log(req.body)

    res.send("pages/login")
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))