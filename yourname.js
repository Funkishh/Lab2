document.addEventListener('DOMContentLoaded', function () {
    // Waiting for HTML to load before javascript - so the submit button shows the success message and doesnt wipe error messages
    const form = document.getElementById('quiz-form');

    // Adds a listener for when the user sends the form - Because of error messages
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();

        // Reset the errors (before a new validation) by key name:
        clearErrors();
        
        let hasErrors = false;

        // Validation of firstName and lastName:

        // NameInput are checking the validity with ! booleans/NOT operators (should only contain letters)
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');

        if (!firstNameInput.checkValidity()) {
            showError('firstNameError');
            hasErrors = true;
        }

        if (!lastNameInput.checkValidity()) {
            showError('lastNameError');
            hasErrors = true;
        }

        if (firstNameInput.value.split('').some(char => !isNaN(char))) {
            showError('firstNameError');
            hasErrors = true;
        }
        
        if (lastNameInput.value.split('').some(char => !isNaN(char))) {
            showError('lastNameError');
            hasErrors = true;
        }

        // Validation of email in same way
        const emailInput = document.getElementById('email');
        if (!emailInput.checkValidity()) {
           
            showError('emailError');
            hasErrors = true;
        }

        // Validation of the questions:
        
        // Check if the radio questions is answered:
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (!q1) {
            // Shows error message if none of the radio buttons are picked:
            showError('q1Error');
            hasErrors = true;
        }

        const q2 = document.querySelectorAll('input[name="q2"]:checked');
        if (q2.length === 0) {
            // Shows error message (checkbox):
            showError('q2Error');
            hasErrors = true;
        }

        const q3 = document.querySelector('#q3').value.trim();
        if (!q3) {
            
            showError('q3Error');
            hasErrors = true;
        }

        const q4 = document.querySelector('#q4').value.trim();
        if (!q4) {
            
            showError('q4Error');
            hasErrors = true;
        }

        const q5 = document.querySelectorAll('input[name="q5"]:checked');
        if (q5.length === 0) {
            // Shows error message (checkbox):
            showError('q5Error');
            hasErrors = true;
        }

        // If there are no errors, show successMessage:
        if (!hasErrors) {
            document.getElementById('successMessage').style.display = 'block';
        }
    });

    // Function to show error message for specific field id
    function showError(elementId) {
        document.getElementById(elementId).style.display = 'block';
    }

    // Function to clear all error messages
    function clearErrors() {
        const errors = document.querySelectorAll('.error');

        // Hides all error messages:
        errors.forEach(function (error) {
            error.style.display = 'none';
        });

        // Also hiding potentially shown success messages:
        document.getElementById('successMessage').style.display = 'none';
    }
});