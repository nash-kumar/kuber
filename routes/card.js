let express = require('express');
let router = express.Router();
module.exports = router;

let Api_Card = require('../controllers/card');
<<<<<<< HEAD
let Auth = require('../middleware/check-auth');
=======
>>>>>>> naresh_code

router.post('/payments',Auth,Api_Card.payments);
router.get('/card/',Auth, Api_Card.Card_Get);
router.get('/bank',Auth,Api_Card.Bank_Get);