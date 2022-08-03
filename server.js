const express = require("express")
const app = express()
const PORT = process.env.PORT || 3002

app.get("/bulldog",(req, res)=>{
    res.json({name:"Runa", age:4, breed:"Bully"})
})

app.listen(PORT,()=>{
    console.log("listening on PORT "+ PORT)
})