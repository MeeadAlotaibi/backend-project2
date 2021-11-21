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

const allCulture = (req, res) => {
  const cat = req.body;
  cultureModel
    .find({ cat })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { culture, allCulture };
