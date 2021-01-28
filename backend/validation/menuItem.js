const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  console.log(data);
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  // name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Field is Required";
  }

  // description checks
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }
  // category checks
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }
  // image checks
  if (Validator.isEmpty(data.image)) {
    errors.image = "Confirm Image field is required";
  }
  // price  checks
  if (Validator.isEmpty(data.price)) {
    errors.image = "Confirm Price field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
