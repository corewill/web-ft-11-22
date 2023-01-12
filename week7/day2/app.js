const express = require("express")
const app = express()
const fs = require("fs")
const PORT = 3002
const users = []

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home")
})
app.get("/jaye", (req, res) => {
    res.send("jaye")
})
app.post("/adam", (req, res) => {
    res.send("adam")
})
app.get("/howdy", (req, res) => {
    res.write("data")
})

app.get("/user/:userId", (request, response) => {
    const users = [
      { name: "Joe", id: 1 },
      { name: "Ethan", id: 2 },
      { name: "Mauro", id: 3 },
      { name: "Vinny", id: 4 },
    ];

  console.log(request.body);
  const userFound = users.find(
    (user) => user.id === Number(request.params.userId)
  );
  savedUsers.push(request.body);
  console.log(savedUsers);
  response.send(
    `I am looking at user ${userFound.name} with id ${userFound.id}`
  );
});

app.delete("/delete/:userId", async (request, response) => {
    console.log(request.body);
    console.log(request.config);
    const user = await user.findById(request.body.userId);
    if (user) {
      const deleteUser = await user.remove();
      response.send({ message: "User Deleted", user: deleteUser });
    } else {
      response.status(404).send({ message: "User Not Found" });
    }
  }


})


app.listen(PORT, console.log(`Listening on port ${PORT}`))