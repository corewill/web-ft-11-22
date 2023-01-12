const express = require("express");
const cowsay = require("cowsay")
const app = express();
const PORT = 3003;
app.use(express.json());

app.get("/cowsayThink", (req, res) =>{
    res.send(cowsay.think({
        text : "I'm a moooodule",
        e : "oO",
        T : "U "
        
    }));
    
})
app.post("/cowsaySpeak", (req, res) =>{
    res.send(cowsay.say({
        text : "I'm a moooodule",
        e : "oO",
        T : "U "
    }));
})
app.post("/cowsayMessage", (req, res) =>{
    console.log(req)
    res.send(cowsay.say({text: req.body.message

    }))
})



app.listen(PORT, console.log(`Listening on port ${PORT}`));