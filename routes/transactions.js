const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Transaction = require('../models/Transaction');

// @route    GET api/transactions
// @desc     Get a transaction
// @access   Private
router.get('/', auth, async (req, res) => {
    res.json('In Transactions');
});

// @route    POST api/transactions
// @desc     Submit a transaction
// @access   Private
router.post('/', auth, async (req, res) => {

    const { name, amount, amountType} = req.body;

    try {
        const newTransaction = new Transaction({
            name,
            amount,
            amountType,
            user: req.user.id
        });

        const transaction = await newTransaction.save();

        res.json(transaction);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/transactions/:id
// @desc     Update a transaction
// @access   Private
router.put('/', auth, async (req, res) => {
    res.json('In Transactions');
});

// @route    Delete api/transactions/:id
// @desc     Delete a transaction
// @access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let transaction = await Transaction.findById(req.params.id);

        if(!transaction) return res.status(404).json({ msg:"Transaction not found."});

        if(transactino.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Not authorized to delete selected transaction"});
        }

        await Transaction.findByIdAndRemove(req.params.id);

        res.json({ msg: "Transaction Deleted"})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;