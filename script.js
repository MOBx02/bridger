const signInBtn = document.querySelector('.signin-btn');
// Add a click event listener to the button
signInBtn.addEventListener('click', function(event) {
  'use strict'
  event.preventDefault();

  const errorMessageElement = document.querySelector('.error-message');
  function animateError() {
    errorMessageElement.classList.add('show');
    setTimeout(function() {
      errorMessageElement.classList.remove('show');
    }, 3000); // hide the error message after 3 seconds (adjust as needed)
    
  }
  animateError();
});


const button = document.getElementById('myButton');
const icon = document.getElementById('myIcon');

button.addEventListener('click', () => {
  icon.classList.toggle('hide');
  icon.classList.toggle('shown');
});