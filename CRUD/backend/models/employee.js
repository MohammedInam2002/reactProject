const mongoose = require("mongoose");
const Schena = mongoose.Schema;

let employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    empno: {
      type: Number,
    },
  },
  {
    collection: "employee",
  }
);
module.exports = mongoose.model("Employee", employeeSchema);
