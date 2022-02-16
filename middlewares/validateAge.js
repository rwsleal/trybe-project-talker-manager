module.exports = (req, res, next) => {
  try {
    const { age } = req.body;

    if (!age || age === '') {
      return res.status(400)
        .json({ message: 'O campo "age" é obrigatório' });
    }

    if (Number(age) < 18) {
      return res.status(400)
        .json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }

    next();
  } catch (e) {
    return next(e);
  }
};
