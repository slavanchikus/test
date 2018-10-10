const db = require('../db.js');

const User = db.user;

exports.create = (req, res) => {
  User.create(req.body).then((user) => {
    res.json(user);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ msg: 'error' });
  });
};

exports.findById = (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ msg: 'error' });
  });
};

/* // Update a Customer
exports.update = (req, res) => {
  const id = req.body.id;
  Customer.update(req.body,
    { where: { id }}).then(() => {
    res.status(200).json({ mgs: `Updated Successfully -> Customer Id = ${id}` });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({ msg: 'error', details: err });
  });
}; */
