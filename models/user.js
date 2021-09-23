var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    dir: String,
    dir_num: Number,
    Status: Boolean,
    pets: [String],
});

module.exports = mongoose.model('User', UserSchema);


