"use strict"

//import config from 'config.js';

const button = document.getElementById('button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const retryButton = document.getElementById('retry');
//let recipe = document.getElementById('recipe');

function myFunction() {
  console.log("Hello from tier1and2.js!");
}

myFunction();

//recipe ='';


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

fetch('https://api.api-ninjas.com/v1/recipe?query=scrambled eggs', {
  headers: {
    'X-Api-Key': 
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

const articleElement = document.querySelector('article');
const checkAndDisplayData = () => {
  if (window.apiData && Array.isArray(window.apiData) && window.apiData.length > 3) {
    const fourthItem = window.apiData[3];
    if (typeof fourthItem === 'object') {
      // Clear existing content
      articleElement.innerHTML = '';
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
      const data = {
        success: true,
        message: 'Successfully added the fourth item to the article element.',
        fourthItemContent: fourthItem,
      };
      return data;
    } else {
      const data = {
        success: false,
        message: 'The fourth item is not an object. Please provide more details about its structure.',
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
};

/*const articleElement = document.querySelector('article');
const checkAndDisplayData = () => {
  if (window.apiData && Array.isArray(window.apiData) && window.apiData.length > 3) {
    const fourthItem = window.apiData[3];
    if (typeof fourthItem === 'object') {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = JSON.stringify(fourthItem);
      articleElement.appendChild(newParagraph);
      const data = {
        success: true,
        message: 'Successfully added the fourth item to the article element.',
        fourthItemContent: fourthItem,
      };
      return data;
    } else {
      const data = {
        success: false,
        message: 'The fourth item is not an object. Please provide more details about its structure.',
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

/*function updateArticle(data) {
  const articleElement = document.querySelector('article');
  if (!articleElement) {
    console.error('Article element not found!');
    return;
  }

  // Clear any existing content in the article
  articleElement.innerHTML = '';

  // Iterate through the data and create HTML elements for each item
  data.forEach(item => {
    const titleElement = document.createElement('h2');
    titleElement.textContent = item.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = item.content;

    articleElement.appendChild(titleElement);
    articleElement.appendChild(contentElement);
  });
}*/


/*const articleElement = document.querySelector('article.article');
const data = {
  articleExists: !!articleElement,
  articleId: articleElement ? articleElement.id : null,
  articleClass: articleElement ? articleElement.className : null,
  articleContent: articleElement ? articleElement.textContent : null,
  apiData: null,
  apiDataExample: [
    { title: 'Example Title 1', content: 'Example Content 1' },
    { title: 'Example Title 2', content: 'Example Content 2' },
  ],
};

// Simulate fetching data from the API (replace with actual API call in tier1and2.js)
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.apiDataExample);
    }, 1000); // Simulate a 1-second delay
  });
};

// Function to update the article content with the fetched data
const updateArticleContent = async () => {
  if (!articleElement) {
    console.error('Article element not found.');
    return;
  }

  try {
    const apiData = await fetchData();
    data.apiData = apiData;

    // Check if the browser supports View Transitions API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // Clear existing content
        articleElement.innerHTML = '';

        // Create and append new content
        apiData.forEach((item) => {
          const titleElement = document.createElement('h2');
          titleElement.textContent = item.title;
          const contentElement = document.createElement('p');
          contentElement.textContent = item.content;
          articleElement.appendChild(titleElement);
          articleElement.appendChild(contentElement);
        });
      });
    } else {
      // Fallback for browsers that don't support View Transitions API
      articleElement.innerHTML = '';
      apiData.forEach((item) => {
        const titleElement = document.createElement('h2');
        titleElement.textContent = item.title;
        const contentElement = document.createElement('p');
        contentElement.textContent = item.content;
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
      });
    }
  } catch (error) {
    console.error('Error fetching or updating data:', error);
    articleElement.textContent = 'Error loading data.';
  }
};

// Call the function to update the article content
updateArticleContent();*/