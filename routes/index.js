const categories = require('./categories');
const plants = require('./plants')

module.exports = (app) => {
app.use('/categories', categories);
app.use('/plants', plants);
}