let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let employeeSchema = require("../models/employee");

router.route("/create-employee").post(async (req, res, next) => {
  await employeeSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
router.route("/").get(async (req, res, next) => {
  await employeeSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: " all item  successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
module.exports = router;
