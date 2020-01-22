var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  const responseData = [
    { id: 1, name: "Alice Liu" },
    { id: 2, name: "Michael Jack" }
  ];
  res.send({ code: 200, data: responseData });
});

module.exports = router;
