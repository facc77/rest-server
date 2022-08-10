const Role = require('../models/role');
const User = require('../models/user');

const _validRole = async (role = '') => {
  const roleExist = await Role.findOne({ role });
  if (!roleExist) {
    throw new Error(`The role ${role} isn't registered in DB`);
  }
};

const _emailExist = async (email = '') => {
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    throw new Error(`The email ${email} is already registered`);
  }
};

const _userExistById = async (id = '') => {
  const userExist = await User.findById(id);
  if (!userExist) {
    throw new Error(`The ${id} doesn't exist`);
  }
};

module.exports = {
  _validRole,
  _emailExist,
  _userExistById,
};
