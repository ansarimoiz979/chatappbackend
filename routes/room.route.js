const router = require("express").Router();
const Rooms = require("../model/room.model")
//new room
router.post("/newRoom", async (req, res) => {
    try {
        const { senderId, receiverId } = req.body
        const room = new Rooms({
            members: [senderId, receiverId]
        })
        let roomData = await room.save()
        res.json({ data: roomData, status: 200 })
    } catch (err) {
        console.log("err to create room", err)
        res.json({ err: err, status: 400 })

    }
})
//get room of user
router.get("/findRooms/:userId", async (req, res) => {
    try {
        // const { userId } = req.params.userId
        const roomsListForUser = await Rooms.find({
            members: { $in: [req.params.userId] }
        })
        res.json({ data: roomsListForUser, status: 200 })
    } catch (err) {
        console.log("err to find room", err)
        res.json({ err: err, status: 400 })

    }
})


module.exports = router