const express = require('express');
const mysql = require('./db');

const app = express();
const { SERVER_PORT } = require('./env');

const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('stay a while');
  });
  

app.get('/categories', (req, res) => {
 mysql.query('select * from categories')
 .then(result => res.status(200).json(result[0]))
 .catch(e => res.status(500).send('erreur data', e.message))

})

app.get('/categories/:id', (req, res) => {
    mysql.query('select * from categories where idCategorie = ?', req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(e => res.status(500).send('erreur data', e.message))   
   })

   app.get('/categories/:id/plantes', (req, res) => {
    mysql.query('select * from plantes where Categorie_id = ?', req.params.id)
    .then(result => res.status(200).json(result[0]))
    .catch(e => res.status(500).send('erreur data', e.message))   
   })

app.get


app.listen(SERVER_PORT, () => {
  console.log(`server is listenning on ${SERVER_PORT}`);
});
