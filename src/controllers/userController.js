import userModel from "../models/user.js";
import db from "../connection.js"
import response from "../response.js"

const getAllData = async (req, res) => {
   try {
      // const data = await userModel.findAll();
      const data = await db.query('SELECT * FROM users',{
         model: userModel
      })
      return res.send(data);
      // response(200, "data all", data, res);
   } catch (error) {
      console.log(error);
   }
}

const storeData = async (req, res) => {
   try {
      const { name, age } = req.body;
      if(!name) { return res.status(428).json({ message: 'name is required' }) }
      if(!age) { return res.status(428).json({ message: 'age is required' }) }

      const data = await userModel.create({
         name: name,
         age: age
      })

      return res.status(201).json({
         status: true,
         message: 'add data successfuly',
         data: data
      })
   } catch (error) {
      console.log(error);
   }
}

const getDataById = async (req, res) => {
   try {
      const { id } = req.params;
      const data = await userModel.findOne({
         where: {
            id: id
         }
      });
      if(!data) {
         return res.status(404).json({ 
            status: false, 
            message: 'data not found'
         });
      }
      return res.status(200).json({
         status: true,
         message: 'data is exist',
         data: data
      })
   } catch (error) {
      console.log(error);
   }
}

const updateData = async (req, res) => {
   try {
      
      const { name, age } = req.body;
      if(!name) { return res.status(428).json({ message: 'name is required' }) }
      if(!age) { return res.status(428).json({ message: 'age is required' }) }
   
      const { id } = req.params;
      const searchData = await userModel.findOne({
         where: {
            id: id
         }
      });
      if(!searchData) {
         return res.status(404).json({ 
            status: false, 
            message: 'data not found'
         });
      }
      
      const data = {
         name: name,
         age: age
      }
      await userModel.update(data, {
         where: {
            id: id
         }
      });
      
      return res.status(200).json({
         status: true,
         message: 'update data successfuly',
         data: data
      })
   } catch (error) {
      console.log(error);
   }
}

const deleteData = async (req, res) => {
   try {
      const { id } = req.params;
      const searchData = await userModel.destroy({
         where: {
            id: id
         }
      })
      if(!searchData) {
         return res.status(404).json({ 
            status: false, 
            message: 'data not found'
         });
      }
      return res.status(200).json({
         status: true,
         message: 'delete data successfuly'
      })
   } catch (error) {
      console.log(error);
   }
}

export { getAllData, storeData, getDataById, updateData, deleteData }