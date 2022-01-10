let errors = {};

function Validation(values) {
  if (!values.full_name) {
    errors.full_name = "Name is required.";
  }
  if (!values.user_email) {
    errors.user_email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
    errors.email = "Email is invalid.";
  }
  if (!values.subject) {
    errors.subject = "Subject is required.";
  }
  if (!values.message) {
    errors.message = "Pleae write some words here.";
  }
  return errors;
}

export default Validation;
