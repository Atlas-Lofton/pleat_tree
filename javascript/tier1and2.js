"use strict"

const button = document.getElementById('button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const retryButton = document.getElementById('retry');

button.style.display = 'none';
retryButton.classList.add('hidden');

function isRadio4or5Selected() {
return document.getElementById('star4').checked || document.getElementById('star5').checked;
}

function isRadio1or2or3Selected() {
return document.getElementById('star1').checked ||
document.getElementById('star2').checked ||
document.getElementById('star3').checked;
}

function updateButtonVisibility() {
if (isRadio4or5Selected()) {
button.style.display = 'inline-block';
retryButton.classList.add('hidden');
} else if (isRadio1or2or3Selected()) {
button.style.display = 'none';
retryButton.classList.remove('hidden');
} else {

button.style.display = 'none';
retryButton.classList.add('hidden');
}
}

radioButtons.forEach(radio => {
radio.addEventListener('change', updateButtonVisibility);
});

updateButtonVisibility();
