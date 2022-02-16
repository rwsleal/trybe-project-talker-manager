const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const talkerToBeEdited = parsedTalkers.find((person) => person.id === Number(id));

    parsedTalkers[Number(talkerToBeEdited.id) - 1] = {
      ...parsedTalkers[Number(talkerToBeEdited.id) - 1], name, age, talk,
    };

    const stringifiedTalkers = JSON.stringify(parsedTalkers);
    await writeFile('./talker.json', stringifiedTalkers);

    return res.status(200).json(parsedTalkers[Number(talkerToBeEdited.id) - 1]);
  } catch (e) {
    return next(e);
  }
};
