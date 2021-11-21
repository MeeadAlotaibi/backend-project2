const tourismModel = require("./../../db/models/dataSchema");

const tourism = (req, res) => {
  const { img, title, description, cat } = req.body;
  const newtourism = new tourismModel({
    img,
    title,
    description,
    cat,
  });
  newtourism
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const allTourism = (req, res) => {
  const cat = req.body;
  tourismModel
    .find({ cat })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { tourism, allTourism };
