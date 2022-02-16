module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;
    const validDate = /^\d{2}[./]\d{2}[./]\d{4}$/;
    if (!talk.watchedAt) {
      return res.status(400).json({
          message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        });
    }

    if (!validDate.test(talk.watchedAt)) {
      return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      });
    }
    next();
  } catch (e) {
    return next(e);
  }
};
