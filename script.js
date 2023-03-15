// Get the "Sign in" button element
const signInBtn = document.querySelector('.signin-btn');

// Add a click event listener to the button
signInBtn.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  'use strict'
  event.preventDefault();

  // Get the element where the error message will be displayed
  const errorMessageElement = document.querySelector('.error-message');
  function animateError() {
    errorMessageElement.innerHTML = 'Invalid email or password.';
    errorMessageElement.classList.add('show');
    setTimeout(function() {
      errorMessageElement.classList.remove('show');
      errorMessageElement.textContent = '';
    }, 3000); // hide the error message after 3 seconds (adjust as needed)
    
  }
  
  // Call the animateError function when you want to show the error message
  animateError();
});
