const mysql = require('../db');

const findAll = async (id) => {
  const result = await mysql.query(
    'select plantes.idPlante , plantes.name as namePlant , plantes.description as descPlant, plantes.picture as pictPlant ,plantes.Categorie_id as CatID , cat.name as catName ,cat.description as descCat, cat.picture as pictCat from plantes  join categories as cat on cat.idCategorie = plantes.Categorie_id where cat.idCategorie = ?',
    id
  );
  return result[0];
};

const findOne = async (id) => {
  const result = await mysql.query(
    'select * from plantes where idPlante = ?',
    id
  );
  return result[0];
};

const createOne = async (body, id) => {
  body.Categorie_Id = id;
  const result = await mysql.query('insert into plantes set ?', body);
  return result[0];
};

const deleteOne = async (id) => {
  const result = await mysql.query(
    'delete from plantes where idPlante = ?',
    id
  );
  return result[0];
};

const update = async (id, body) => {
  const result = await mysql.query('update plantes set ? where idPlante = ?', [
    body,
    id,
  ]);
  return result[0];
};

module.exports = { findAll, findOne, createOne, deleteOne, update };


// insert into products set name = "Baies de Goji (Ningxia) GreenFood - Sachet de 500 g" , description = "Contenu du sachet de Goji 500g de Baies de GojBaies de taille moyenne à grande : 50 grammes de baies contiennent 280 à 350 fruits. Ces Baies de Goji correspondent à la qualité grade A définie par Green Food.GreenFoodCes baies de Goji proviennent d'une coopérative agricole de la région du Ningxia. Pour en savoir plus sur cette appellation et son cahier des charges associé, rendez-vous sur www.greenfood.org.cn " , price = "9.90" , picture =  "https://www.123gelules.com/5882-thickbox/goji-ningxia-greenfood-sachet-de-500-gr.jpg" , Plante_idPlante = 1 ;

// update products set price = 9.90 where idproducts = 1;