let mongoose = require('mongoose');
// create an mvp model
let mvpModel = mongoose.Schema({
    name: String,
    age: Number,
    team: String,
    championships: Number,
    history: String
    },
    {
        collection: "MVPs"
    }
);
module.exports = mongoose.model('mvp', mvpModel);
