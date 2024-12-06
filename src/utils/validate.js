export const checkValidData = ( email, password) => {
  

  
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 
  if (!isEmailValid) return "Email ID is not valid. Please provide a valid email format.";
  if (!isPasswordValid) return "Password is not valid. It must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.";

  return null; // All validations passed
};
