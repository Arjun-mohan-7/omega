
function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailError = document.getElementById("email-error");

    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        // Email is valid
        emailError.textContent = ""; // Clear the error message
        return true;
    } else {
        // Email is invalid
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
}

function clearErrorMessage() {
    var emailError = document.getElementById("email-error");
    emailError.textContent = "";
}
