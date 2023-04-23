const {Schema, model} = require('mongoose');

const ListSchema = new Schema({
    user_id: {type: String, required: true},
    description: {type: String, required: true},
    value: {type: String, required: true},
    bool: {type: Boolean, required: true},
    date:  {type: Date, default: Date.now }
})

module.exports = model('List', ListSchema);