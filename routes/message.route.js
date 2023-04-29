const router = require("express").Router();
const Message = require("../model/message.model")
const {
    newMessageCnt,
    msgByRoomIdCnt
} = require("../controller/message.controller")


//add new message
router.post("/newMessage", newMessageCnt )
//get my room messages
router.get("/getMessage/:roomId", msgByRoomIdCnt)

module.exports = router