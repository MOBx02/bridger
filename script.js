const content = document.getElementById('myContent');

window.addEventListener('load', () => {
  content.style.opacity = 1;
});
//-----------------------
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
    }, 2000); // hide the error message after 3 seconds 
    
  }
  animateError();
});

//-------------------------
const button = document.getElementById('myButton');
const icon = document.getElementById('myIcon');

button.addEventListener('click', () => {
  icon.classList.toggle('hide');
  icon.classList.toggle('shown');
});