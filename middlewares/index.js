const registeredTalkers = require('./registeredTalkers');
const talkerById = require('./talkerById');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateToken = require('./validateToken');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalkDate = require('./validateTalkDate');
const validateTalkRate = require('./validateTalkRate');
const validateTalk = require('./validateTalk');
const insertTalker = require('./insertTalker');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');

module.exports = {
  registeredTalkers,
  talkerById,
  validateEmail,
  validatePassword,
  validateToken,
  validateName,
  validateAge,
  validateTalkDate,
  validateTalkRate,
  validateTalk,
  insertTalker,
  editTalker,
  deleteTalker,
};
