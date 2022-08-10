const { check } = require('express-validator');
const { _validRole, _emailExist, _userExistById } = require('./db-validators');
const { validationResult } = require('./validationResult');

const _validMongoId = check('id', 'Not a valid MongoId').isMongoId();
const _userExist = check('id').custom(_userExistById);
const _roleRequired = check('role').custom(_validRole);

const putRequestValidations = [
  _roleRequired,
  _userExist,
  _validMongoId,
  validationResult,
];

module.exports = {
  putRequestValidations,
};
