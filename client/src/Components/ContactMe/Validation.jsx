function Validation(values) {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.full_name) {
    errors.full_name = "Full name is required!";
  }
  if (!values.user_email) {
    errors.user_email = "Email is required!";
  } else if (!regex.test(values.user_email)) {
    errors.user_email = "Email is not valid!";
  }
  if (!values.subject) {
    errors.subject = "Subject is required!";
  }
  if (!values.message) {
    errors.message = "Message is required!";
  }
  return errors;
}

export default Validation;
