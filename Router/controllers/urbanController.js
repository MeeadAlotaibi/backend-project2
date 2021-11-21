const urbanModel = require("./../../db/models/dataSchema");

const urban = (req, res) => {
  const { img, title, description, cat } = req.body;
  const newUrban = new urbanModel({
    img,
    title,
    description,
    cat,
  });
  newUrban
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const allUrban = (req, res) => {
  //   const cat = req.body;
  urbanModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { urban, allUrban };
