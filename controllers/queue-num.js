const express = require("express");
const router = express.Router();

let queueCounter = 0;

//generate queue
router.get("/queue-num", (req, res) => {
	queueCounter++; 
	const queueNumber = `Queue Number: ${queueCounter}`; 
	res.json({ queueNumber });
});

module.exports = router;

