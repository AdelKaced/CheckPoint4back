const categories = require('./categories');
const plants = require('./plants')
const products= require('./products');

module.exports = (app) => {
app.use('/categories', categories);
app.use('/plantes', plants);
app.use('/products', products)
}