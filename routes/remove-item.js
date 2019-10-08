const express = require("express");
const removeItem = require("../utils/remove");
const router = express.Router();
router.delete("/:item", (req, res) => { 
  let { data } = req.body;
  let item = req.params.item;
  let dataToRemoveFrom = {...data};
  let removed = removeItem(dataToRemoveFrom, item);
  if (removed) return res.status(200).json({ data:dataToRemoveFrom });
  return res.status(200).json({error:"attribute not found"})
});

module.exports = router;