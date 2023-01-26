const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

const PORT = 3012

app.use(express.json())

app.post("/create_user", (req, res) => {
    const password = "abc123"
    bcrypt.hash(password,10,(err,hash)=>{
        console.log(err)
        console.log(hash)
        // create user in table with new hash pw
        const user = await Users.create({
            username: "corebill",
            password: hash,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        res.send(user)
    })
    
})


app.post("/login_user", (req, res) => {
    const password = "abc123"
   
        // create user in table with new hash pw
        const user = await Users.findOne({
        where: {
            username: "corebill"
        }
        })
        bcrypt.compare(password,user.password,(err, res)=>{
            console.log(err)
            console.log(res)
            if (err) {
                res.send(err)
                return
            } 
            if(!res){
                res.send(401)
                res.send(
                    "your password does not match. please enter in correct password"
                )
                return
            }
            res.status(200).send("look like you have a matching password")
        })
    })


app.listen(PORT, console.log(`Listening on port ${PORT}`))