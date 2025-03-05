"use strict"

const button = document.getElementById('button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const retryLink= document.getElementById('retryLink');
// Hide the button initially
button.style.display = 'none';
retryLink.style.display= 'none';
// Function to check if radio 4 or 5 is selected
function isRadio4or5Selected() {
  const radio4 = document.querySelector('input[id="star4"]:checked');
  const radio5 = document.querySelector('input[id="star5"]:checked');
  return !!radio4 || !!radio5;
}
function isRadio1or2or3Selected(){
    const radio3 = document.querySelector('input[id="star3"]:checked');
    const radio2 = document.querySelector('input[id="star2"]:checked');
    const radio1 = document.querySelector('input[id="star1"]:checked');
    return !!radio3 || !!radio2 || !!radio1;
}
// Function to update button visibility
function updateButtonVisibility() {
  if (isRadio4or5Selected()) {
    button.style.display = 'inline-block';
    retryLink.style.display= 'none';
  } else if (isRadio1or2or3Selected) {
    retryLink.style.display= 'inline-block';
    button.style.display= 'none';
  }
    else {
    button.style.display = 'none';
    retryLink.style.display= 'none';
  }
}

//retryBtn.style.display= 'inline-block'
// Add event listeners to radio buttons
radioButtons.forEach(radio => {
  radio.addEventListener('change', updateButtonVisibility);
});

// Initial check
updateButtonVisibility();

const data = {
  buttonHidden: window.getComputedStyle(button)['display'] === 'none',
  linkHidden: window.getComputedStyle(retryLink)['display'] === 'none',
  radio4or5Selected: isRadio4or5Selected(),
  radio1or2or3Selected: isRadio1or2or3Selected(),
};