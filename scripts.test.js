import { activateForm } from './script';

describe('activateForm', () => {
  beforeEach(() => {
    // Criar um elemento de formulário fake para testar
    const form = document.createElement('form');
    form.id = 'register-form';
    document.body.appendChild(form);

    // Criar elementos de entrada fake para testar
    const emailInput = document.createElement('input');
    emailInput.id = 'email';
    form.appendChild(emailInput);

    const fullnameInput = document.createElement('input');
    fullnameInput.id = 'nome completo';
    form.appendChild(fullnameInput);

    const cpfInput = document.createElement('input');
    cpfInput.id = 'cpf';
    form.appendChild(cpfInput);

    const usernameInput = document.createElement('input');
    usernameInput.id = 'nomedeusuário';
    form.appendChild(usernameInput);

    const passwordInput = document.createElement('input');
    passwordInput.id = 'senha';
    form.appendChild(passwordInput);

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.id = 'confirmPassword';
    form.appendChild(confirmPasswordInput);

    const agreementInput = document.createElement('input');
    agreementInput.id = 'acordo';
    form.appendChild(agreementInput);

    const errorValidationElement = document.createElement('p');
    errorValidationElement.className = 'validação de erro';
    document.body.appendChild(errorValidationElement);
  });

  afterEach(() => {
    // Remover elementos fake do DOM
    document.body.removeChild(document.getElementById('register-form'));
    document.body.removeChild(document.querySelector('.validação de erro'));
  });

  it('should return false when email is invalid', () => {
    const emailInput = document.getElementById('email');
    emailInput.value = 'invalid-email';

    expect(activateForm()).toBe(false);
  });

  it('should return false when fullname is empty', () => {
    const fullnameInput = document.getElementById('nome completo');
    fullnameInput.value = '';

    expect(activateForm()).toBe(false);
  });

  it('should return false when cpf is invalid', () => {
    const cpfInput = document.getElementById('cpf');
    cpfInput.value = '1234567890';

    expect(activateForm()).toBe(false);
  });

  it('should return false when password is empty', () => {
    const passwordInput = document.getElementById('senha');
    passwordInput.value = '';

    expect(activateForm()).toBe(false);
  });

  it('should return true when all fields are valid', () => {
    const emailInput = document.getElementById('email');
    emailInput.value = 'example@example.com';

    const fullnameInput = document.getElementById('nome completo');
    fullnameInput.value = 'John Doe';

    const cpfInput = document.getElementById('cpf');
    cpfInput.value = '12345678909';

    const usernameInput = document.getElementById('nomedeusuário');
    usernameInput.value = 'johndoe';

    const passwordInput = document.getElementById('senha');
    passwordInput.value = 'password123';

    const confirmPasswordInput = document.getElementById('confirmPassword');
    confirmPasswordInput.value = 'password123';

    const agreementInput = document.getElementById('acordo');
    agreementInput.checked = true;

    expect(activateForm()).toBe(true);
  });
});