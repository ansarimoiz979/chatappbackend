
const mongo = require("mongoose")
mongo.connect('mongodb://127.0.0.1:27017/chatapp',{ useNewUrlParser : true, useUnifiedTopology : true  });
const db = mongo.connection

db.on("error",(err)=>{
    console.log("err",err)
})

db.on("open",()=>{
    console.log("connected")
})


module.exports = db