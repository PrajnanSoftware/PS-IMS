
// server/models/Order.js
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    total: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    orderNumber: { type: String, required: true, unique: true },
    type: { type: String, enum: ['sale', 'purchase'], required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
    status: { 
        type: String, 
        enum: ['pending', 'processing', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
