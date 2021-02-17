const express = require('express');
const mysql = require('./db');

const app = express();
const { SERVER_PORT } = require('./env');

const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());


require('./routes')(app);

app.get('/', (req, res) => {
  res.status(200).send('stay a while');
});


app.listen(SERVER_PORT, () => {
  console.log(`server is listenning on ${SERVER_PORT}`);
});
