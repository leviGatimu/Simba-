import Users from "../model/UserModel.js";

export const getAllUsers = async (req, res) => {
    try{
        const user = await Users.find()
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export  const getUserById = async (req, res) => {
    try{
        const user = await Users.findById(req.params.id);
        if(!user) return res.status(404).json({err: "User is not found."});
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export const createUser = async (res, res) => {
    try{
        const user = new Users(req.body);
        await user.save()
        res.json(user);
    }catch(err){
        conole.log(err);
        process.exit(1);
    }
}

export const updateUser = async (req, res) => {
    try{
        const user = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true , runvalidators: true});
        if(!user) return res.status(404).json({err: "User was not found."});
        res.status(200).json(user)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export const deleteUser = async (req, res) => {
    try{
        const user = await Users.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({err: "User was not found."});
        res.status(200).json({message : "User deleted succesfully"});
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}