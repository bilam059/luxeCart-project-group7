const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        //User already exists
        throw new Error('User Already Exists');   
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check if user exists
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser?._id,   
            firstName: findUser?.firstName,
            lastName: findUser?.lastName,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

const resetPassword = asyncHandler(async (req, res) => {
    const { email, newPassword } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
        throw new Error('User Not Found');
    } else {
        // Check if newPassword is provided
        if (!newPassword) {
            throw new Error('New password is required');
        }
        findUser.password = newPassword;
        await findUser.save();
        res.json({ message: "Password updated successfully" });
    }
});

const getallUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updatedUser = asyncHandler(async (req, res) => {
    
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        }, {
            new:true,
        }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
})


const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        });
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = { createUser, loginUserCtrl, getallUser , getaUser, deleteaUser, updatedUser};
