const {
  findAll,
  findOne,
  createOne,
  update,
  deleteOne,
} = require('../models/categories');

const getAll = async (req, res) => {
  try {
    const data = await findAll();
    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal server error');
  }
};

const getOne = async (req, res) => {
  try {
    const data = await findOne(req.params.id);
    res.status(200).json(data[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal server error');
  }
};

const handlePost = async (req, res) => {
  try {
    const data = await createOne(req.body);
    console.log(data)
    const result = await findOne(data.insertId);
    res.status(200).json(result[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal server error');
  }
};

const handleUpdate = async (req, res) => {
  try {
    await update(req.body, req.params.id);
    const result = await findOne(req.params.id);
    res.status(200).json(result[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal server error');
  }
};

const handleDelete = async (req, res) => {
  try {
    await deleteOne(req.params.id);
    res.status(200).send('data has been delete');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal server error');
  }
};

module.exports = {
  getAll,
  getOne,
  handlePost,
  handleUpdate,
  handleDelete,
};
