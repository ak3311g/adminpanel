import express from "express";
import {getUserData, getAllusers, getUsersbyCategory} from "../controllers/usersController.js";

const usersRoute = express.Router();

usersRoute.get('/', getAllusers);
usersRoute.get('/get-profile/:id', getUserData);
usersRoute.get('/get-users/:category', getUsersbyCategory);

export default usersRoute;