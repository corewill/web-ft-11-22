const express = require("express");
const app = express();
const PORT = 3006;
const data = require("./data")

// middleware
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")
// middleware

app.use(express.json())

app.get("/", (req, res) => {
    const mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ]
    res.render("pages/index", {
        mascots: mascots
    })
})
app.get("/about", (req, res) => {
    res.render("pages/about")
})
app.get("/aboutme", (req, res) => {
    const me = 
        {name: "Corey",
        city: "Atlanta",
        occupation: "Developer",
        favColor: "Hello, and thanks for stopping by. I am a software developer in the atlanta area. I love parks and being in nature",
        pic: "https://media.licdn.com/dms/image/D4E35AQE0tbRXVxqYng/profile-framedphoto-shrink_200_200/0/1673164907637?e=1674064800&v=beta&t=KtD8Bjetcum3cVeEqtFJxS2-3A_4oiYyNAsc0DGk4VU"
    }
    // const oneliner = {

    // }
    
    res.render("pages/aboutme", {me: me, })
})

app.get("/newpage", (req, res) => {
    const accountBalance = {
        amount: "$123,233,322,000.09",
      };
      const pending = {
        amount: "$46,788.21",
      };
      const processedData = {
        amount: "$657,441.22",
      };
    res.render("pages/newpage", {data: data, accountBalance: accountBalance, pending: pending, processedData: processedData})
})

app.listen(PORT, console.log(`Listening on port ${PORT}`));

