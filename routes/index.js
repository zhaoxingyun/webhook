var express = require('express');
var router = express.Router();

/* github */
router.post('/github', function(req, res, next) {
	console.log('body', req.body);
	console.log('headers', req.headers);
	res.send('ok');
});

module.exports = router;
