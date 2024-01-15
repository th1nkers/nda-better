const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pageSchema = new Schema({
    home: { type: mongoose.Types.ObjectId, required: true, ref: 'Home' },
})

module.exports = mongoose.model('Page', pageSchema);