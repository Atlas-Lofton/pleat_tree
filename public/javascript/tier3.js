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

const articleElement = document.querySelector('article.article');
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/data/tier3');
    const data = await response.json();
    console.log(data);
    window.apiData = data;
    window.dispatchEvent(new Event('apiDataLoaded'));
  } catch (error) {
    console.log(error);
  }
};
fetchData();

    window.addEventListener('apiDataLoaded', () => {
      if (window.apiData && window.apiData.length >= 4) {
        const firstItem = window.apiData[0];
        // Clear existing content
        articleElement.innerHTML = '';
    
        if (typeof firstItem === 'object') {
            // Create elements for title, ingredients, and instructions
            const titleElement = document.createElement('h3');
            titleElement.textContent = firstItem.title || 'No Title';
            const ingredientsHeading = document.createElement('h4');
            ingredientsHeading.textContent = 'Ingredients:';
            const ingredientsList = document.createElement('ul');
            if (Array.isArray(firstItem.ingredients)) {
              firstItem.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
              });
            } else {
              const ingredientItem = document.createElement('li');
              ingredientItem.textContent = firstItem.ingredients || 'No ingredients';
              ingredientsList.appendChild(ingredientItem);
            }
            const instructionsHeading = document.createElement('h4');
            instructionsHeading.textContent = 'Instructions:';
            const instructionsParagraph = document.createElement('p');
            instructionsParagraph.textContent = firstItem.instructions || 'No instructions';
            // Append elements to the article
            articleElement.appendChild(titleElement);
            articleElement.appendChild(ingredientsHeading);
            articleElement.appendChild(ingredientsList);
            articleElement.appendChild(instructionsHeading);
            articleElement.appendChild(instructionsParagraph);
          }
       
      } else {
        articleElement.textContent = 'Data not available or not enough items.';
      }
    });

