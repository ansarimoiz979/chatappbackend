const express = require("express");
const app = express()
const db = require("./config/db")
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use("/v1/message", require("./routes/message.route"))
app.use("/v1/user",  require("./routes/user.route"))
app.use("/v1/room",  require("./routes/room.route"))



app.listen(3002,(err)=>{
    if(err)
    console.log("error", err);
    else
    console.log("server running on port 3002");
})
