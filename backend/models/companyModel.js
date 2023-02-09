const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyname: {
    type: String,
    required: true,
  },
  companyemail: {
    type: String,
    required: true,
  },
  companykey: {
    type: String,
    required: true,
  },
  contactno: {
    type: Number,
    required: true,
  },
  companyaddress: {
    type: String,
    required: true,
  },
});
