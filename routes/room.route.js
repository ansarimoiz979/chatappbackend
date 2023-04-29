const router = require("express").Router();
const Rooms = require("../model/room.model")
const {
    newRoomCnt,
    findExistingRoomCnt   
} = require("../controller/room.controller")
//new room
router.post("/newRoom", newRoomCnt)
//get room of user
router.get("/findRooms/:userId", )


module.exports = router