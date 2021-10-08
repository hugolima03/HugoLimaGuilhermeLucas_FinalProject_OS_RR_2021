const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server rodando e tudo ok!");
});

module.exports = router;
