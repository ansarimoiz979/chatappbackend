const newMessageCnt = async (req, res) => {
    try {
        const newMessage = new Message(req.body)
        const savedMessage = await newMessage.save()
        res.status(201).json({ data: savedMessage, message: "MESSAGE_ADDED" })
    } catch (err) {
        console.log("fail to add message", err)
        res.status(500).json({ err: err, message: "FAIL_TO_ADD_NEW_MESSAGE" })
    }
}
const msgByRoomIdCnt = async (req, res) => {
    try {
        const messages = await Message.find({
            roomId: req.params.roomId
        })
        res.status(200).json({ data: messages, message: "SUCCESS" })
    } catch (err) {
        res.status(500).json({ err: err, message: "FAIL_TO_GET_MESSAGE" })
    }
}



exports.module = {
    newMessageCnt,
    msgByRoomIdCnt
}