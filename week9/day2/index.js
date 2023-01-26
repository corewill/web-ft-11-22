require('dotenv').config()
const express = require("express")
const app = express()
const creds = require("./creds")
const PORT = 3008

app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")

app.use(express.json())

app.get("/todo_list", (req, res) => {
    creds.connect((err, client, release) => {
        // check for the error
        if (err) {
          return console.error(err.stack);
        }
        client.query(
          `SELECT * FROM grocerylist;`,
          (err, results) => {
            release()
            if (err) {
              console.log(err);
            } else {
                res.render("pages/index", {
                    creds:results.rows
                })
          }
        })
    });
})


  app.post("/create_todo", (req, res) => {
    creds.connect((error,client,release)=>{
        // check for errors
        if(error){
            return console.error(error.stack)
        }
        client.query(
            `INSERT INTO grocerylist (task) VALUES ($1);`,
      [req.body.task],
      (error,result)=>{
                release()
                if(error){
                    res.status(400).send(error.stack)
                } else {
                    res.status(200).send(result)
                }

            }
        
        )
    })
    
  });


  app.post("/create_todos", (req, res) => {
    creds.connect((error,client,release)=>{
        // check for errors
        if(error){
            return console.error(error.stack)
        }
        client.query(
            `INSERT INTO grocerylist (task) VALUES ($1);`,
      [req.body.task, ],
      (error,result)=>{
                release()
                if(error){
                    res.status(400).send(error.stack)
                } else {
                    res.status(200).send(result)
                }

            }
        
        )
    })
    
  });



  app.put("/modify_todo", (req, res) => {
    creds.connect((error,client,release)=>{
        // check for errors
        if(error){
            return console.error(error.stack)
        }
        client.query(
            `UPDATE grocerylist SET TASK = $1 WHERE id = ($2);`,
      [req.body.task, req.body.task],
      (error,result)=>{
                release()
                if(error){
                    res.status(400).send(error.stack)
                } else {
                    res.status(200).send(result)
                }

            }
        
        )
    })
    
  });




  app.delete("/del_todo", (req, res) => {
    creds.connect((error,client,release)=>{
        // check for errors
        if(error){
            return console.error(error.stack)
        }
        client.query(
            `DELETE FROM grocerylist WHERE id = $1;`,
      [req.body.task],
      (error,result)=>{
                release()
                if(error){
                    res.status(400).send(error.stack)
                } else {
                    res.status(200).send(result)
                }

            }
        
        )
    })
    
  });






app.listen(PORT, console.log(`Listening on port ${PORT}`))