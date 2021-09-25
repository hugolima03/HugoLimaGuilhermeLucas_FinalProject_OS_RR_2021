const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server rodando e tudo OK!");
});

module.exports = router;
