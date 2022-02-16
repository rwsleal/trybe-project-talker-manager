const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const generateTalkerId = parsedTalkers.length + 1;
    const newTalker = { id: generateTalkerId, name, age, talk: { rate, watchedAt } };

    parsedTalkers.push(newTalker);

    const stringifiedTalkers = JSON.stringify(parsedTalkers);

    await writeFile('./talker.json', stringifiedTalkers);

    return res.status(201).json(newTalker);
  } catch (e) {
    return next(e);
  }
};
