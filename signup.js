// age calculation
function calculateAge() {
  var dob = document.getElementById("dob").value;
  var dobDate = new Date(dob);
  var today = new Date();
  var age = today.getFullYear() - dobDate.getFullYear();
  document.getElementById("age").value = age;
}

// Validation function for email address
function validateEmail() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var email = emailInput.value;

  // Regular expression to match a valid email pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }
}

// Validation function for phone number
function validatePhoneNumber() {
  var phoneNumberInput = document.getElementById("phone");
  var phoneError = document.getElementById("phoneError");
  var phoneNumber = phoneNumberInput.value;

  // Regular expression to match a valid phone number pattern
  var phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phoneNumber)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
  } else {
    phoneError.textContent = "";
  }
}

// Validation function for password and confirm password
function validatePassword() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm_password");
  var passwordError = document.getElementById("passwordError");
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    passwordError.textContent = "Passwords do not match.";
  } else {
    passwordError.textContent = "";
  }
}

// Add event listener for the email input field on focus out
var emailInput = document.getElementById("email");
emailInput.addEventListener("blur", validateEmail);

// Add event listener for the phone number input field on focus out
var phoneNumberInput = document.getElementById("phone");
phoneNumberInput.addEventListener("blur", validatePhoneNumber);

// Add event listener for the password and confirm password input fields on focus out
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirm_password");
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", validatePassword);

// Function to populate the cities based on the selected state
function populateCities() {
  var stateSelect = document.getElementById("state");
  var citySelect = document.getElementById("city");
  var selectedState = stateSelect.value;

  // Remove all existing options
  citySelect.innerHTML = "";

  if (selectedState === "state1") {
    citySelect.innerHTML = "<option value=''>Select</option>";
  } else if (selectedState === "state2") {
    citySelect.innerHTML =
      "<option value='city1'>Chennai</option>" +
      "<option value='city2'>Coimbatore</option>";
  } else if (selectedState === "state3") {
    citySelect.innerHTML =
      "<option value='city3'>Thiruvananthapuram</option>" +
      "<option value='city4'>Kochi</option>";
  }
}

// Get references to the input fields and error message spans
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const firstNameError = document.getElementById('first_name_error');
const lastNameError = document.getElementById('last_name_error');

// Validation functions
function validateFirstName() {
  const firstNameValue = firstNameInput.value.trim();

  if (/^[A-Za-z\s]+$/.test(firstNameValue)) {
    firstNameError.textContent = ''; // Clear the error message
  } else {
    firstNameError.textContent = 'First name should contain only alphabets and spaces';
  }
}

function validateLastName() {
  const lastNameValue = lastNameInput.value.trim();

  if (/^[A-Za-z\s]+$/.test(lastNameValue)) {
    lastNameError.textContent = ''; // Clear the error message
  } else {
    lastNameError.textContent = 'Last name should contain only alphabets and spaces';
  }
}

// Attach event listeners
firstNameInput.addEventListener('blur', validateFirstName);
lastNameInput.addEventListener('blur', validateLastName);
