const db = require('../db.js');

const User = db.user;

exports.create = (req, res) => {
  const newUser = {
    id: req.body.id,
    shared: false,
    email: ''
  };

  User.create(newUser).then((user) => {
    res.json(user);
  }).catch((err) => {
    res.status(500).json({ msg: 'error', err });
  });
};

exports.findById = (req, res) => {
  User.findById(req.params.id).then((user) => {
    if (!user) {
      res.json({
        id: null,
        shared: false,
        email: ''
      });
    }
    res.json(user);
  }).catch((err) => {
    res.status(500).json({ msg: 'error', err });
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
