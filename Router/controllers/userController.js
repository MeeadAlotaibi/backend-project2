const userModel = require("./../../db/models/userSchema");

//// sign up - Add new user //// 


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
      res.status(201).send({ message: "User was registered successfully!" });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
////////////////////////////////////////////////////

//sign in
const signin = (req, res) => {
  // Username
  userModel
    .findOne({
      username: req.body.username,
    })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(400).send({ message: "User Not found." });
      }

      // Password
      userModel
        .findOne({
          password: req.body.password,
        })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          if (!user) {
            return res.status(400).send({ message: "Invalid Password!" });
          }
          res.status(200).send({
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
          });
        });
    });
};

////////////////////////////////////////////////////


/// Get the specific user
const alluser = (req, res) => {
  userModel
    .find({
      id: req.body.id,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    }); //Done
};

/////////////////////////////////////////////////////////



   
const favoriteUser = (req, res) => {
  const { email, _id } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $push: { favoriteSchema: _id } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
/////////////////////////////////////////////////////////



const removeFavoriteUser = (req, res) => {
  console.log('fdgfddfdf');
  const { email, _id } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $pull: { favoriteSchema: _id } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
/////////////////////////////////////////////////////////



const favoriteUserTest = (req, res) => {
  // const { email, ObjectId } = req.params;
  // userModel.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
  


  //   userModel
  //     .findOneAndUpdate(
  //       { email: email },
  //       { $push: { favoriteSchema: ObjectId } },
  //       { new: true }
  //     )
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       res.send(err);
  //     });
  //   // }
  // });
  res.json('b')
};
/////////////////////////////////////////////////////////
const getFavorite = (req, res) => {
  const { email } = req.query;
  userModel
    .find({ email })
    .populate("favoriteSchema")
    .exec()
    .then((result) => {
      res.send(result[0].favoriteSchema);
    })

    .catch((err) => {
      res.send(err);
    });
};




module.exports = {
  user,
  alluser,
  signin,
  favoriteUser,
  removeFavoriteUser,
  getFavorite,
  favoriteUserTest,
};
