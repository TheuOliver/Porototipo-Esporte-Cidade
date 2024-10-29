// Seleciona o formulário e os campos de entrada
const form = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const fullnameInput = document.getElementById("fullname");
const cpfInput = document.getElementById("cpf");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const agreementInput = document.getElementById("agreement");
const errorValidationElement = document.querySelector(".error-validation");

// Função para validar o formulário
function validateForm() {
  let isValid = true;

  // Validar e-mail
  if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    isValid = false;
    errorValidationElement.textContent = "E-mail inválido";
  }

  // Validar nome completo
  if (fullnameInput.value.trim() === '') {
    isValid = false;
    errorValidationElement.textContent = "Nome completo é obrigatório";
  }

  // Validar CPF
  if (!cpfInput.value.match(/^\d{11}$/)) {
    isValid = false;
    errorValidationElement.textContent = "CPF inválido";
  }

  // Validar nome de usuário
  if (usernameInput.value.trim() === '') {
    isValid = false;
    errorValidationElement.textContent = "Nome de usuário é obrigatório";
  }

  // Validar senha
  if (passwordInput.value.trim() === '') {
    isValid = false;
    errorValidationElement.textContent = 'Senha é obrigatória';
  }

  // Validar confirmação de senha
  if (confirmPasswordInput.value !== passwordInput.value) {
    isValid = false;
    errorValidationElement.textContent = 'Senhas não conferem';
  }

  // Validar aceite dos termos de uso
  if (!agreementInput.checked) {
    isValid = false;
    errorValidationElement.textContent = 'Você deve aceitar os termos de uso';
  }

  return isValid;
}

// Adiciona evento de submit ao formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Enviar formulário para o servidor
    console.log('Formulário válido, enviando para o servidor...');
  } else {
    errorValidationElement.style.display = 'block';
  }
});