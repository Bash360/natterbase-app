const express = require('express');
const validate = require("./validation");
const removeItem = require("./remove-item");
const aladin = require("./aladin");
const router = express.Router();

router.use("/validate", validate);
router.use("/remove", removeItem);
router.use("/aladin",aladin);


module.exports = router;
