
window.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.getElementById('email');
    var emailErrorMessage = document.getElementById('email-error');

    emailInput.addEventListener('blur', function() {
        if (!validateEmail(emailInput.value)) {
            emailErrorMessage.style.display = 'block';
        } else {
            emailErrorMessage.style.display = 'none';
        }
    });

    function validateEmail(email) {
        // Simple email validation using a regular expression
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
