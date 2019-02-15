const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  familyName: String,
  givenName: String,
  googleId: String,
  imageUrl: String,
  name: String,
});

mongoose.model('users', userSchema);