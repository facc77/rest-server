const { check } = require('express-validator');
const { _validRole, _emailExist } = require('./db-validators');
const { validationResult } = require('./validationResult');

const _nameRequired = check('name', 'Name required').not().isEmpty();
const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailValid = check('email', 'Email is invalid').isEmail();
const _passwordRequired = check(
  'password',
  'Password should be at least 6 letters',
)
  .not()
  .isEmpty()
  .isLength({ min: 6 });

const _roleRequired = check('role').custom(_validRole);

const _emailRegistered = check('email').custom(_emailExist);

const postRequestValidations = [
  _nameRequired,
  _emailRequired,
  _emailValid,
  _passwordRequired,
  _roleRequired,
  _emailRegistered,
  validationResult,
];
module.exports = {
  postRequestValidations,
};
