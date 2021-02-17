const mysql = require('../db');

const findAll = async () => {
  const result = await mysql.query('select * from categories');
  return result[0];
};

const findOne = async (id) => {
  const result = await mysql.query(
    'select * from categories where idCategorie = ?',
    id
  );
  return result[0];
};

const createOne = async (id) => {
  const result = await mysql.query('insert into categories set ?', id);
  return result[0];
};

const update = async (body, id) => {
  const result = await mysql.query('update categories set ? where idCategorie =?', [
    body,
    id,
  ]);
  return result[0];
};

const deleteOne = async (id) => {
  const result = await mysql.query('delete from categories where idCategorie= ?',id);
  console.log(result);
  return result[0];
};

module.exports = {
  findAll,
  findOne,
  createOne,
  update,
  deleteOne,
};
