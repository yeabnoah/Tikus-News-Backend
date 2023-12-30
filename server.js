const express = require("express")
const router = require("./routes/routes.js")
const cors  = require("cors")
const app = express()

app.use(cors())
app.use("/", router)

app.listen(4000,()=>{
  console.log(`server is running on port 4000`)
})