const { findAll, findOne, createOne, deleteOne, update } = require('../models/plants');

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

const handlePost = async (req, res) => {
  try {
    const data = await createOne(req.body, req.params.id);
    const result = await findOne(data.insertId);
    res.status(201).json(result);
  } catch {
    console.log(err.message);
    res.status(500).send('internal error');
  }
};

const handleDelete = async (req, res) => {
  try {
    await deleteOne(req.params.id);
    res.status(204).json('data has been removed');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal error');
  }
};

const handleUpdate = async (req, res) => {
    try {
      await update(req.params.id, req.body);
      const result = await findOne(req.params.id);
      res.status(200).json(result[0]);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('internal server error');
    }
  };

module.exports = {
  getAll,
  getOne,
  handlePost,
  handleDelete,
  handleUpdate
};
