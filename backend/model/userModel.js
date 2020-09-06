import mongoose from 'mongoose';
import db from '../db/confg';

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false}  
})

const userModel = db.model('users', userSchema);

export default userModel;



// a SCHEMA describe the model detail