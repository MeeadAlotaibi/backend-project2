const cultureModel = require("./../../db/models/dataSchema");

const culture = (req, res) => {
  const { img, title, description, cat } = req.body;
  const newculture = new cultureModel({
    img,
    title,
    description,
    cat,
  });
  newculture
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const allallCulture = (req, res) => {
  cultureModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
/////////////////////
const allCulture = (req, res) => {
  //search
  const { cat } = req.query;
  cultureModel
    .find({ cat })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { culture, allCulture, allallCulture };
