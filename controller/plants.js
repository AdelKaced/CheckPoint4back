const { findAll, findOne } = require('../models/plants');

const getAll = async (req, res) => {
  try {
    const data = await findAll(req.params.id);
    console.log('dataPlants', data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal server error');
  }
};

const getOne = async (req, res) => {
  try {
    const data = await findOne(req.params.id);
    res.status(200).json(data);
  } catch {
    console.log(err.message);
    res.status(500).send('internal server error');
  }
};

module.exports = {
  getAll,
  getOne,
};
