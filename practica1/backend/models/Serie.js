const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SerieSchema = new Schema({
    nombre: String,
    clasificacion: String,
});

const SerieModel = mongoose.model('Serie', SerieSchema);

module.exports = SerieModel;