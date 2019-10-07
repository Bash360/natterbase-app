const express = require('express');
const validate = require("./validation");
const router = express.Router();


router.use("/validate", validate);


module.exports = router;
