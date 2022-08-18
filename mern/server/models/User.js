const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID  : String,
  inventory : { type: Array, default: [] }
});

mongoose.model('users', userSchema);
