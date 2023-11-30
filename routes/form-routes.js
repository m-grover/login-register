const express=require("express")
const router=express.Router();
const formInfoController=require("../controller/form-controller");

router.get("/",formInfoController.getAllUsers);
router.post("/login",formInfoController.loginInfo);
router.post("/register",formInfoController.registerInfo);
router.get('/:id',formInfoController.getById);
router.put('/:id/change-password',formInfoController.changePassword);
router.delete('/:id',formInfoController.deleteAccount);
router.put('/:id/change-username',formInfoController.changeUsername);

module.exports=router;