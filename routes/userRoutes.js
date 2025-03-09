const {register, login,getAllUsers,setAvatar,logOut} =require('../controllers/usercontroller')

const router=require("express").Router()

router.post("/register",register)

router.post("/login",login)
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports=router

 