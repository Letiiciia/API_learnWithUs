const express = require('express');
const router = express.Router();
const accountController = require('../controller/account');

router.post('/register', accountController.addAccount);
router.get('/accounts', accountController.getAccounts);
router.patch('/update/:id', accountController.updateAccount);
router.delete('/delete/:id', accountController.deleteAccount);


module.exports = router