const db = require("../models");

const Data = db.data;

exports.create = (req, res) => {
    console.log(req.body)
  const data = new Data({
    name: req.body.name,
    mobile: req.body.mobile,
    gender: req.body.gender,
  });

  data.save(data).then((resp) => {
    res.send(resp);
  });
};
