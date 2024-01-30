const express = require("express")

const app = express()
const cors = require("cors")


const TokenRoute = require("./routes/token")

app.listen(5000, ()=>{
  console.log("server runs!!!")
})
 
app.use(express.json())
app.use(cors())
app.get("/",  (req,res )=>{
  res.send("Mpesa transaction in process ......")
})

app.use("/token",TokenRoute)