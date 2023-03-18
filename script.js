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

const input1 = document.getElementById('myInput1');

input1.addEventListener('focus', () => {
  input1.placeholder = '';
});

input1.addEventListener('blur', () => {
  input1.placeholder = 'Enter your email here';
});

const input2 = document.getElementById('myInput2');

input2.addEventListener('focus', () => {
  input2.placeholder = '';
});

input2.addEventListener('blur', () => {
  input2.placeholder = 'Enter your password here';
});