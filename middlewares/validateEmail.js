module.exports = (req, res, next) => {
  try {
    const validEmail = /\S+@\S+\.\S+/;
    const { email } = req.body;

    if (!email || email === '') {
      return res.status(400)
        .json({ message: 'O campo "email" é obrigatório' });
    }

    if (!validEmail.test(email)) {
      return res.status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
  next();
  } catch (e) {
    return next(e);
  }
};
