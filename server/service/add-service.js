const AddModel = require('../models/add-model');

class AddService {
    async add(item_id, user_id, description, value, bool, date, timeAdded) {
        const item =  await AddModel.create({item_id, user_id, description, value, bool, date, timeAdded});
        return item;
    }

    async get(user_id) {
        const item =  await AddModel.find({user_id});
        return item;
    }

    async delete(item_id, user_id) {
        const item =  await AddModel.findOneAndDelete({item_id, user_id});
        return item;
    }
}

module.exports = new AddService();