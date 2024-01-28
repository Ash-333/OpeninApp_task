export const validateForm = (email) => {
  const isValidEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email);

  if(!isValidEmail) return "Please enter valid email address"

  return null
};
