"use strict"



const button = document.getElementById('button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const retryButton = document.getElementById('retry');


function myFunction() {
  console.log("Thanks for looking!");
}

myFunction();




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


 //Use this api call
const articleElement = document.querySelector('article.article');
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/data');
    const data = await response.json();
    console.log(data);
    window.apiData = data;
    window.dispatchEvent(new Event('apiDataLoaded'));
  } catch (error) {
    console.log(error);
  }
};
fetchData();

    //new code starts here
    window.addEventListener('apiDataLoaded', () => {
      if (window.apiData && window.apiData.length >= 4) {
        const fourthItem = window.apiData[3];
        // Clear existing content
        articleElement.innerHTML = '';
    
        if (typeof fourthItem === 'object') {
            // Create elements for title, ingredients, and instructions
            const titleElement = document.createElement('h3');
            titleElement.textContent = fourthItem.title || 'No Title';
            const ingredientsHeading = document.createElement('h4');
            ingredientsHeading.textContent = 'Ingredients:';
            const ingredientsList = document.createElement('ul');
            if (Array.isArray(fourthItem.ingredients)) {
              fourthItem.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
              });
            } else {
              const ingredientItem = document.createElement('li');
              ingredientItem.textContent = fourthItem.ingredients || 'No ingredients';
              ingredientsList.appendChild(ingredientItem);
            }
            const instructionsHeading = document.createElement('h4');
            instructionsHeading.textContent = 'Instructions:';
            const instructionsParagraph = document.createElement('p');
            instructionsParagraph.textContent = fourthItem.instructions || 'No instructions';
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

  
;
const data = {
  articleContent: articleElement.textContent,
  articleChildren: Array.from(articleElement.children).map(el => ({
    tagName: el.tagName,
    id: el.id,
    className: el.className,
  })),
};


//module.exports = isRadio4or5Selected()