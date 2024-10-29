// Selects the form and input fields
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorValidationElement = document.querySelector('.error-validation');

// Function to validate the form
function validateForm() {
  let isValid = true;

  // Validate email
  if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    isValid = false;
    errorValidationElement.textContent = 'Invalid email';
  }

  // Validate password
  if (passwordInput.value.trim() === '') {
    isValid = false;
    errorValidationElement.textContent = 'Password is required';
  }

  return isValid;
}

// Adds submit event to the form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Send form to the server
    console.log('Valid form, sending to the server...');
  } else {
    errorValidationElement.style.display = 'block';
  }
});