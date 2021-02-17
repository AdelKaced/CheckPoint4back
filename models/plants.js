const mysql = require('../db');

const findAll = async (id) => {
   const result =  await mysql.query('select plantes.idPlante , plantes.name as namePlant , plantes.description as descPlant, plantes.picture as pictPlant ,plantes.Categorie_id as CatID , cat.name as catName ,cat.description as descCat, cat.picture as pictCat from plantes  join categories as cat on cat.idCategorie = plantes.Categorie_id where cat.idCategorie = ?',id);
    return result[0] ;
   }

   const findOne = async (id) => {
       const result = await mysql.query('select * from plantes where idPlante = ?', id);
       return result[0];
   }

module.exports = { findAll, findOne} ;