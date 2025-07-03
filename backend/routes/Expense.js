// routes/Expense.js
const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/Expense');

router.post('/', expenseController.createExpense);
router.get('/:userId', expenseController.getUserExpenses);

module.exports = router;
