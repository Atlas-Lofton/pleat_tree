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
//window.addEventListener('apiDataLoaded', () => {
  //if (window.apiData && window.apiData.length >= 4) {
    //const fourthItem = window.apiData[3];
    //articleElement.textContent = JSON.stringify(fourthItem);
    //new code starts here
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


/*const articleElement = document.querySelector('article.article');
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
    const fourthItem = window.apiData[1];
    articleElement.textContent = JSON.stringify(fourthItem);
  } else {
    articleElement.textContent = 'Data not available or not enough items.';
  }
});
const data = {
  articleContent: articleElement.textContent,
  articleChildren: Array.from(articleElement.children).map(el => ({
    tagName: el.tagName,
    id: el.id,
    className: el.className,
  })),
};



document.addEventListener('DOMContentLoaded',()=> {
  fetchData();
})*/





/*async function fetchData() {
  try {
    const response = await fetch('http://localhost:3001/api/data/tier2'); // Fetch data from your server
    const data = await response.json();
    // Process the data received from the server
    console.log(data);
    // ... do something with the data ...
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener('DOMContentLoaded',()=> {
  fetchData();
})*/


/*fetch('https://api.api-ninjas.com/v1/recipe?query=boiled eggs', {
    headers: {
      'X-Api-Key': 'cqRo1lugsKv0xkSibZPhWw==943V65luCmqhJzwH'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not fetch resource: " + response.status + " " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    window.apiData = data; // Assign data to window.apiData to make it global
    window.dispatchEvent(new Event('apiDataLoaded')); // Dispatch the event after data is available
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
  const articleElement = document.getElementById('article1');
  const article2Element = document.getElementById('article2');
  const checkAndDisplayData = () => {
    if (window.apiData && Array.isArray(window.apiData) && window.apiData.length > 3) {
      const firstItem = window.apiData[0];
      if (typeof firstItem === 'object') {
        // Clear existing content
        articleElement.innerHTML = '';
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
        const data = {
          success: true,
          message: 'Successfully added the fourth item to the article element.',
          firstItemContent: firstItem,
        };
        return data;
      } else {
        const data = {
          success: false,
          message: 'The first item is not an object. Please provide more details about its structure.',
        };
        return data;
      }
    } else {
      const data = {
        success: false,
        message: 'apiData is not defined, not an array, or does not have at least four items.',
      };
      return data;
    }
  };
  if (window.apiData) {
    const data = checkAndDisplayData();
  } else {
    window.addEventListener('apiDataLoaded', () => {
      const data = checkAndDisplayData();
    });
  }
  const data = {
    message: 'Waiting for apiData to be available.',
  };*/