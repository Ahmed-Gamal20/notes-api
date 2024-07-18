
import express from 'express';
// import mongoose from 'mongoose';
import { dbConnection } from './database/dbConnection.js';
import userRoutes from './src/modules/users/user.routes.js';
import noteRoutes from './src/modules/notes/note.routes.js';
import sendOurEmail from './src/utilties/sendEmail.js';
// import userModel from './database/models/user.model.js';
const app = express()
const port = 3000
app.use(express.json());

// connection mongoose
dbConnection


app.use(userRoutes);
app.use(noteRoutes);











app.listen(port, () => console.log(`Example app listening on port ${port}!`))







//! CRUD

// app.get('/', async(req, res) => {
//     const users=await userModel.find();
//     res.json({message:`done`,users});
// })

// app.post('/', async(req, res) =>{
//     await userModel.insertMany(req.body)
//     res.json({message:`add success`})
// })

// app.put('/:id', async(req, res) =>{
//    let user =await userModel.findByIdAndUpdate(req.params.id,{name:req.body.name,email:req.body.email,age:req.body.age,password:req.body.password},{new:true})
//     res.json({message:`update success`,user})
// })

// app.delete('/:id', async(req, res) =>{
//     let user =await userModel.deleteOne({_id:req.params.id})
//      res.json({message:`delete success`,user})
//  })




