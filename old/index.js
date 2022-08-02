const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastName');
const phoneInput = document.getElementById('input-phone');
const emailInput = document.getElementById('input-email');
const licenseInput = document.getElementById('input-license');

const buttonReset = document.getElementById('button-reset');
const buttonSubmit = document.getElementById('button-submit');

const formRegister = document.getElementById('registrationForm');

buttonReset.addEventListener('click', resetHandler);
buttonSubmit.addEventListener('click', submitHandler);

nameInput.addEventListener('input', removeErrorClassFromElement);
lastNameInput.addEventListener('input', removeErrorClassFromElement);
phoneInput.addEventListener('input', removeErrorClassFromElement);
emailInput.addEventListener('input', removeErrorClassFromElement);

function removeErrorClassFromElement(event) {
  event.target.classList.remove('error');
}

const vardas = 3;

function resetHandler(event) {
  event.preventDefault();
  formRegister.reset();
}

function submitHandler(event) {
  event.preventDefault();
  const invalidEntries = validateData();
  console.log(!invalidEntries.length);
  if (!invalidEntries.length) {
    formRegister.submit();
  } else {
    for (let index = 0; index < invalidEntries.length; index++) {
      errorInput(invalidEntries[index]);
    }
  }
}

function errorInput(input) {
  let suma = 0;
  input.classList.add('error');
}

function validateData() {
  const invalidEntries = [];

  if (nameInput.value === '') {
    invalidEntries.push(nameInput);
  }

  if (lastNameInput.value === '') {
    invalidEntries.push(lastNameInput);
  }

  if (phoneInput.value === '') {
    invalidEntries.push(phoneInput);
  }
  if (emailInput.value === '') {
    invalidEntries.push(emailInput);
  }
  return invalidEntries;
}
