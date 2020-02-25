const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String
    },
    amount: {
        type: Number
    },
    amountType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transaction', TransactionSchema);