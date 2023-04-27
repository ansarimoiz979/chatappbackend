const router = require("express").Router();
const User = require("../model/user.model")
router.post("/register",async (req , res)=>{
    try {
        const { name , email , password} = req.body
    const user = new User({ name : name,email : email, password : password})    
    let userdata = await user.save()
           res.json({  data : userdata })
    }catch(err)
    {
        console.log("err",err)
        res.json({  err : err })
        
    }
})

router.post("/loginToPortal",async (req, res)=>{
    try{
        const { email , password } = req.body
        let userInfo = await User.findOne({ email : email , password : password })
        if(!userInfo)
        {
            res.json({ message : "USER_DOES_NOT_EXIST", data : userInfo })
        }else{
            res.json({ message : "USER_EXIST", data : userInfo , status : 200})
        }
    }catch(err){
        console.log("error in logintoportal",err);
        res.json({ err : err })
    }
})


router.get("/userList",async (req , res)=>{
    try {
        let userdata = await User.find()
        res.status(200).json({  data : userdata })
    }catch(err)
    {
        console.log("err",err)
        res.status(500).json({  err : err })
        
    }
})

module.exports = router