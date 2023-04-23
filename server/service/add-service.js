const AddModel = require('../models/add-model');

class AddService {
    async add(user_id, description, value, bool) {
        const item =  await AddModel.create({user_id, description, value, bool});
        return item;
    }
}

module.exports = new AddService();