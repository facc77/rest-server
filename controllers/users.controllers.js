const { response } = require('express');

const userGet = (req, res = response) => {
  const { q, nombre = 'No name', apikey, page = 1 } = req.query;
  res.json({ ok: true, msg: 'get api - controllers', q, nombre });
};

const userPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  console.log(req.body);

  res.json({ msg: 'post api - controllers', nombre, edad });
};

const userPut = (req, res = response) => {
  const { id } = req.params;

  res.json({ ok: true, msg: 'put api - controllers', id });
};

const userDelete = (req, res = response) => {
  res.json({ ok: true, msg: 'delete api - controllers' });
};

module.exports = {
  userGet,
  userPost,
  userPut,
  userDelete,
};
