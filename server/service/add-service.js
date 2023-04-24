const AddModel = require('../models/add-model');

class AddService {
    async add(user_id, description, value, bool, date) {
        const item =  await AddModel.create({user_id, description, value, bool, date});
        return item;
    }

    async get(user_id) {
        const item =  await AddModel.find({user_id});;
        return item;
    }
}

module.exports = new AddService();