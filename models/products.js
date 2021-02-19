const mysql = require('../db');

const findOne = async (id) => {
  const result = await mysql.query(
    'Select * from products where idproducts= ?',
    id
  );
  return result[0];
};

const findAll = async (id) => {
  const result = await mysql.query(
    'Select * from products where Plante_idPlante= ?',
    id
  );
  return result[0];
};

const createOne = async (body, id) => {
  body.Plante_idPlante = id;
  const result = await mysql.query('insert into products set ?', body);
  return result[0];
};

const deleteOne = async (id) => {
  const result = await mysql.query(
    'delete from products where idproducts =?',
    id
  );
  return result[0];
};

const updateOne = async (body, id) => {
  const result = await mysql.query(
    'update products set ? where idproducts =?',
    [body, id]
  );
  return result[0];
};

module.exports = { findOne, findAll, createOne, deleteOne, updateOne };
