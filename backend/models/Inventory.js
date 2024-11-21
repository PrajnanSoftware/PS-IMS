
// server/models/Inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    quantity: { type: Number, required: true, min: 0 },
    unitPrice: { type: Number, required: true },
    category: String,
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    reorderPoint: { type: Number, default: 10 },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);
