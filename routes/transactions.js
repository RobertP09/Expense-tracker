const express = require('express');
const router = express.Router();

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
    res.json('In Transactions');
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
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;