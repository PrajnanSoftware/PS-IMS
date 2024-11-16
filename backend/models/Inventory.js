const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    orderID: { type: String, required: true },
    product: { type: String, required: true },
    category: { type: String, required: true },
    salesChannel: { type: String, required: true },
    instruction: { type: String, required: true },
    items: { type: String, required: true },
    status: { type: String, enum: ['Completed', 'Pending'], default: 'Pending' }
});

module.exports = mongoose.model('Inventory', inventorySchema);
