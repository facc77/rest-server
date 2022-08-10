const { Router } = require('express');
const {
  userGet,
  userPost,
  userPut,
  userDelete,
} = require('../controllers/users.controllers');
const { deleteRequestValidations } = require('../helpers/deleteValidate');
const { postRequestValidations } = require('../helpers/postValidate');
const { putRequestValidations } = require('../helpers/putValidate');

const router = Router();

router.get('/', userGet);

router.post('/', postRequestValidations, userPost);

router.put('/:id', putRequestValidations, userPut);

router.delete('/:id', deleteRequestValidations, userDelete);

module.exports = router;
