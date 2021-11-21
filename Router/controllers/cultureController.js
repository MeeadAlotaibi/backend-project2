const dataModel = require("./../../db/models/dataSchema");

const culture = (req, res) => {
  const { img, title, description, cat } = req.body;
  const newSomeData = new dataModel({
    img,
    title,
    description,
    cat,
  });
  newSomeData
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const allCulture = (req, res) => {
  dataModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { culture, allCulture };
