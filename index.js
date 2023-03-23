const app = require("express")();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/discord-auth",(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.get("/axios.js",(req,res)=>{
    res.sendFile(__dirname+"/axios.js")
})

app.listen(4321)