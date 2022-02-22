const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { q: searchTerm } = req.query;
    const talkers = await readFile('./talker.json', 'utf-8');

    const parsedTalkers = JSON.parse(talkers);
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredTalkers = parsedTalkers.filter((person) => {
      const lowerCasePersonName = person.name.toLowerCase();
      return lowerCasePersonName.includes(lowerCaseSearchTerm);
    });

    if (!searchTerm) return res.status(200).json(parsedTalkers);
    
    return res.status(200).json(filteredTalkers);
  } catch (e) {
    return next(e);
  }
};
