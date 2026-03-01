import mongoose from "../model/user.js";

export const getAllusers = async (req, res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err.message});
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({err: "User was not found."});
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

export const postUser = async (req,res)