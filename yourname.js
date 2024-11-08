document.addEventListener('DOMContentLoaded', function () {
    /* Waiting for HTML to load before javascript - so the submit button shows the success message and doesnt wipe error messages */
    const form = document.getElementById('quiz-id');

    /* Adds a listener for when the user sends the form - for error messages to work */
    form.addEventListener('submit', function (event) {
        
        event.preventDefault();

        /* Reset the errors (before a new validation): */

        clearErrors();

        function clearErrors(){
            let errors = document.querySelectorAll('.error');
            for(let error of errors){
                error.style.display = 'none';
            }
        }
        
        /* there are no errors in the beginning */

        let areErrors = false;

        

        /* NameInput are checking the validity with ! booleans/NOT operators */
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');

        /* hiding errors if there are none */
        function hideError(errorMsg) {
            const errorElement = document.getElementById(errorMsg);
            
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        }

        if (!firstNameInput.checkValidity())   {
            showError('firstNameError');
            areErrors = true;
        } else {
            hideError ('firstNameError');
        }

        if (!lastNameInput.checkValidity())     {
            showError('lastNameError');
            areErrors = true;
        } else {
            hideError ('lastNameError');
        }

        if (firstNameInput.value.split('').some(char => !isNaN(char))) {
            showError('firstNameError');
            areErrors = true;
        }
        
        if (lastNameInput.value.split('').some(char => !isNaN(char))) {
            showError('lastNameError');
            areErrors = true;
        }

         /* Validation of email in same way */
        const emailInput = document.getElementById('email');
        if (!emailInput.checkValidity() ) {
           
            showError('emailError');
            areErrors = true;
        } else {
            hideError ('emailError');
        }

        /* Validation of the questions:
        
        Check if the radio questions is answered */
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (!q1) {
            /* Shows error message if none of the radio buttons are picked */
            showError('q1Error');
            areErrors = true;
        }  else {
            hideError ('q1Error');
        }

        const q2 = document.querySelectorAll('input[name="q2"]:checked');
        if (q2.length === 0) {
            /* Shows error message (checkbox) */
            showError('q2Error');
            areErrors = true;
        } else {
            hideError ('q2Error');
        }


        const q4 = document.querySelector('#q4').value.trim();
        if (!q4)  {
            showError('q4Error');
            areErrors = true;
        } else {
            hideError ('q4Error');
        }

        const q5 = document.querySelectorAll('input[name="q5"]:checked');
        if (q5.length === 0) {
            showError('q5Error');
            areErrors = true;
        } else {
            hideError ('q5Error');
        }

        /* showing the success message when submitting, in case of no errors */
        if (!areErrors) {
            document.getElementById('successMessage').style.display = 'block';
        } 
    });

    /* Showing error message (in the correct area) */
    function showError(errorMsg) {
        document.getElementById(errorMsg).style.display = 'block';
        errorElement.classList.add('error');
    }

});