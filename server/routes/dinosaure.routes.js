const express = require('express')
const router = express.Router();

const dinosaureController = require('../controllers/dinosaure.controller');

//router.get('/', dinosaureController.getFriends);
router.post('/', dinosaureController.getIfAccountExists);
router.post('/account', dinosaureController.createDinoAccount);
router.get('/friends/:id', dinosaureController.getFriends);
router.post('/friends/:id', dinosaureController.createDinoFriend);
router.put('/friends/:id', dinosaureController.editDinoFriend);
router.delete('/friends/:id', dinosaureController.deleteDinoFriend);

module.exports = router;