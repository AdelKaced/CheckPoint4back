const { findOne, createOne, findAll, deleteOne, updateOne} = require('../models/products');

const getOne = async (req, res) => {
  try {
    const data = await findOne(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal error');
  }
};

const getAll = async (req, res) => {
  try {
    const data = await findAll(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal error');
  }
};

const handlePost = async (req, res) => {
  try {
    const data = await createOne(req.body, req.params.id);
    const result = await findOne(data.insertId)
    res.status(201).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal error');
  }
};

const handleDelete = async (req, res) => {
  try {
    await deleteOne(req.params.id);
    res.status(200).send('data has been delete')
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal error');
  }
}
const handleUpdate = async (req, res) => {
  try {
    await updateOne(req.body, req.params.id);
    const result = await findOne(req.params.id)
    res.status(200).json(result[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('internal error');
  }
};

module.exports = { getOne, getAll, handlePost, handleDelete, handleUpdate };
