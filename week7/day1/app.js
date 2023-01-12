// require our packages (express)
const express = require("express");
const app = express();
const PORT = 3000;

// routes
app.get("/",(require,response) =>{
    response.send("hello");
})
app.get("/users",(require,response) =>{
    const users = [ {
        name: "joe",
        address: "123 main st"
    },
    {
        name: "ethan",
        address: "123 main st"
    } ]
    response.send(users)
})

app.post("/users", (req, res) => {
    res.send("Tee hee")
})
app.get("/display_users", (req, res) => {
    res.send("i promise")
})

app.patch("/update_users", (req, res) => {
    res.status(404).send("error");
})
app.delete("/delete_users", (req, res) => {
    res.status(404).send("");
})




// listen for request
app.listen(PORT, console.log(`Listening on port ${PORT}`));