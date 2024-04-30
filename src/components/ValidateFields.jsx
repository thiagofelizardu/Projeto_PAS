export function validateFields(formValues) {
  const errors = {};

  if (!formValues.firstName.trim()) {
    errors.firstName = 'O campo de primeiro nome não pode estar vazio.';
  }

  if (!formValues.lastName.trim()) {
    errors.lastName = 'O campo de segundo nome não pode estar vazio.';
  }

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

  if (!formValues.dateOfBirth.trim()) {
    errors.dateOfBirth = 'O campo de data de nascimento não pode estar vazio.';
  } else if (!isOver18Years(formValues.dateOfBirth)) {
    errors.dateOfBirth = 'Você deve ser maior que 18 anos para se cadastrar.';
  }

  if (!formValues.phone.trim()) {
    errors.phone = 'O campo de telefone não pode estar vazio.';
  } else if (!isValidPhone(formValues.phone)) {
    errors.phone = 'O telefone digitado não é válido.';
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

function isOver18Years(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const now = new Date();
  const diff = now - dob;
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

  return age >= 18;
}

function isValidPhone(phone) {
  const phoneRegex = /^(\(\d{2}\)|\d{2})\s?9?\d{4}-?\d{4}$/;
  return phoneRegex.test(phone);
}
