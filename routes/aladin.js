const express = require("express");
const router = express.Router();
const getLowestIndex = require("../utils/aladin.js");
router.post("/", (req, res) => {
  const { magic, dist, n } = req.body;
  const result = getLowestIndex(magic, dist, n);
  return res.status(200).json(result);

});
module.exports=router;