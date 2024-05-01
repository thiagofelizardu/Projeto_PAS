export function validateSignIn(formValues) {
    const errors = {};

    if (!formValues.email.trim()) {
      errors.email = 'O campo de email não pode estar vazio.';
    } else if (!isValidEmail(formValues.email)) {
      errors.email = 'O email digitado não é válido.';
    }
  
    if (!formValues.password.trim()) {
      errors.password = 'O campo de senha não pode estar vazio.';
    } else if (!isValidPassword(formValues.password)) {
      errors.password = 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos.';
    }

  
    return errors;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,12}$/;
    return passwordRegex.test(password);
  }
  
  