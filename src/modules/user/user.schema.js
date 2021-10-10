import mongoose from 'mongoose';
import mongoose2 from '../../configs/db.config';
//connect();
const Schema = mongoose2();

const userSchema = new mongoose.Schema({
  /*   id: 'string', */
  name: {
    type: String,
    required: [true, 'Required'],
  },
  dob: {
    type: String,
    required: [true, 'Required'],
  },
  address: {
    type: String,
    required: [true, 'Required'],
  },
  description: {
    type: String,
    required: [true, 'Required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
