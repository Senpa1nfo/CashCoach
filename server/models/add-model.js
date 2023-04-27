const {Schema, model} = require('mongoose');

const ListSchema = new Schema({
    item_id: {type: Number, required: true},
    user_id: {type: String, required: true},
    description: {type: String, required: true},
    value: {type: String, required: true},
    bool: {type: Boolean, required: true},
    date: {type: String, required: true}
})

module.exports = model('List', ListSchema);