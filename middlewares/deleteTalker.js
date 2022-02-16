const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const talkerIndex = parsedTalkers.findIndex((person) => person.id === Number(id));

    parsedTalkers.splice(talkerIndex, 1);

    const stringifiedTalkers = JSON.stringify(parsedTalkers);
    await writeFile('./talker.json', stringifiedTalkers);

    return res.status(204).end();
  } catch (e) {
    return next(e);
  }
};