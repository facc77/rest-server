const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const userGet = async (req, res = response) => {
  const { limite = 15, desde = 0 } = req.query;
  const query = { estate: true };

  // promise all ejecuta los await en paralelo
  const [total, users] = await Promise.all([
    User.count(query),
    User.find(query).limit(Number(limite)).skip(Number(desde)),
  ]);

  res.json({ total, users });
};

const userPost = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  // Encriptar la contrasena
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({ msg: 'post api - controllers', user });
};

const userPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...resto } = req.body;

  // TODO validar contra db
  if (password) {
    // Encriptar la contrasena
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, resto, { new: true }); // returns the new document);

  res.json({ ok: true, msg: 'put api - controllers', id, user });
};

const userDelete = async (req, res = response) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  /* const user = await User.findByIdAndUpdate(
    id,
    { estate: false },
    { new: true },
  );
  console.log(user); */
  res.json({ ok: true, msg: 'delete api - controllers', user });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
