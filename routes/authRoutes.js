const multer = require('multer');
const mongoose = require('mongoose');

const User = mongoose.model('users');

const upload = multer();

module.exports = (app) => {
  app.post(
    '/api/auth',
    upload.array(),
    async (req, res) => {
      const existingUser = await User.findOne({ googleId: req.body.googleId });
      if (!existingUser) {
        await new User(req.body).save();
      }

      res.send(req.body)
    }
  );
};