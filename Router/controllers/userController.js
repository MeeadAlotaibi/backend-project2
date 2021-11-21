const userModel = require("./../../db/models/userSchema");

const user = (req, res) => {
  const { username, email, password } = req.body;

  const newuser = new userModel({
    username,
    email,
    password,
  });

  newuser
    .save()
    .then((result) => {
      res.json(result); 
    })
    .catch((err) => {
      res.send(err);
      
    });
};

const alluser = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { user, alluser };
