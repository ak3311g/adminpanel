import User from "../models/usermodels.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";

// Controller function to handle fetching user data
const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.body.id).populate("userProfile");
    res.json(user);
    }
    catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: error.message });
    }
}

const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    }
    catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: error.message });
    }
}

const getUsersbyCategory = async (req, res) => {
  try {
    const users = await User.find({role: req.params.category});
    res.json(users);
    }
    catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: error.message });
    }
}

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    if (user) {
      user.fullname = req.body.fullname || user.fullname;
      user.email = req.body.email || user.email;
      user.phonenumber = req.body.phonenumber || user.phonenumber;
      user.role = req.body.role || user.role;
      user.username = req.body.username || user.username;
      user.profilePicture = req.body.profilePicture || user.profilePicture;

      if (req.body.password) {
        user.password = req.body.password;
      }

      await user.save();
      res.json(user);
    }
  }
  catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: error.message });
  }
}



export { getUserData, getAllusers, getUsersbyCategory, updateProfile };