const mongoose=require("mongoose")
const userModel=require("../model/userModel");

const getAllUsers=async(req,res)=>{
    let user;
    try{
        user=await userModel.find();
    }
    catch(error){
        console.log(error);
    }
    if(!user){
        return res.status(404).json({message:"No Users Found"});
    }
    return res.status(200).json({user});
}

const getById=async(req,res)=>{
    const id=req.params.id;
    let user;
    try{
        user=await userModel.findById(id);
    }
    catch(error){
        console.log(error);
    }
    if(!user){
        return res.status(404).json({message:"No User Found"});
    }
    return res.status(200).json({user});
}

const loginInfo= async (req,res)=>{
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            if(password===existingUser.password)
            {
                res.send({message:"Login Successful",existingUser:existingUser})
            }
            else
            {
                res.send({message:"Wrong Password Entered"})
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const registerInfo= async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            res.send({ message: "User already registered" });
        } 
        else {
            const newUser = new userModel({ name, email, password });
            await newUser.save();
            res.send({ message: "Successfully registered, please login now" });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const changePassword=async(req,res)=>{
    const {email,newPassword}=req.body;
    try{
        const user=await userModel.findOne({email});

        if(user){
            user.password=newPassword;
            await user.save();

            res.send({message:'Password changed successfully'});
        }
        else{
            res.send({message:"User not found"})
        }
    }
    catch(error){
        res.status(500).send({error:error.message});
    }
}

const changeUsername=async(req,res)=>{
    const {newUsername,email}=req.body;
    const user=await userModel.findOne({email});

    if(user){
        user.name=newUsername;
        await user.save();

        res.send({message:'Username changed successfully'})
    }
    else
    {
        res.send({message:"Username not changed"})
    }
}

const deleteAccount=async(req,res)=>{
    const id=req.params.id;
    let user;
    try{
        user=await userModel.findByIdAndDelete(id);
    }
    catch(error){
        console.log(error);
    }
    if(!user){
        return res.status(404).json({message:"Unable to delete your account"})
    }
    return res.status(200).json({message:"Account successfully deleted"})
}

exports.loginInfo=loginInfo;
exports.registerInfo=registerInfo;
exports.changePassword=changePassword;
exports.getById=getById;
exports.getAllUsers=getAllUsers;
exports.deleteAccount=deleteAccount;
exports.changeUsername=changeUsername;