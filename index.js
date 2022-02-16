const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const middlewares = require('./middlewares');

const validationSteps = [
  middlewares.validateToken,
  middlewares.validateName,
  middlewares.validateAge,
  middlewares.validateTalk,
  middlewares.validateTalkDate,
  middlewares.validateTalkRate,
];

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', middlewares.registeredTalkers);

app.get('/talker/:id', middlewares.talkerById);

const token = randomBytes(8).toString('hex');
const loginValidation = [middlewares.validateEmail, middlewares.validatePassword];

app.post('/login', loginValidation, (_req, res) => res.status(200).json({ token }));

app.post('/talker', validationSteps, middlewares.insertTalker);

app.put('/talker/:id', validationSteps, middlewares.editTalker);

app.delete('/talker/:id', middlewares.validateToken, middlewares.deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
