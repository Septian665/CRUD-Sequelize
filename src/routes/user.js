import express from "express";
import { getAllData, storeData, getDataById, updateData, deleteData } from "../controllers/userController.js";
const route = express.Router();

route.post('/user', storeData);
route.get('/user', getAllData);
route.get('/user/:id', getDataById);
route.patch('/user/:id', updateData);
route.delete('/user/:id', deleteData);

export default route;