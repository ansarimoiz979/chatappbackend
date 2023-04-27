const mongoose = require("mongoose");
const ChatRoomSchema = new mongoose.Schema({
    members : {
        type :Array
    },
    type : {
        type : String
    }
},
{
    timestamps : true
});

module.exports = mongoose.model("ChatRoom", ChatRoomSchema)