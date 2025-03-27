# pleat_tree

Thank you for looking at my captsone project. Because I doubt you want to spend hours cooking to test the site, pretending you've cooked the recipes is more than welcome.

The purpose of my site is to give users the chance to try pre-selected recipes in order of difficulty in order to become better at cooking. Users will be given a chance to rate their attempt at the recipe after following the instructions, which will determine if they are allowed to progress to the next recipe.
The captsone requirements I chose for this project are: I made a third party API call for all the recipes shown on the site, though the photos did not come from the api. You can see the api call in the server.
Another requirement was the server that I created to host the api call. It serves pages tier1-tier5. The api call and server were the hardest part of this for me, as it took me two weeks respectively for both to work.
Finally, the last requirement I chose was testing with jest. I wrote 5 simple front-end tests for tier1.html.


Some instructions to get the site working on your machine:

To see the recipes, visit https://api-ninjas.com/api/recipe in your browser and copy the api key provided. Create a .env file in the root directory and write in your api key using this template:
apiKey ='-----------'


Go to server.js


in terminal, type npm install and let all the packages install.


ensure package.json reads as follows:
{ "scripts": {
  "test": "jest"
},
  "dependencies": {
    "axios": "^1.8.3",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "path": "^0.12.7"
  },
  "devDependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@types/jest": "^29.5.14",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  }
}

test script must be included, or tests will not run.

Run test by typing npm test in terminal
The terminal should give you the test results. All five should pass.

When you are ready to visit the site in your browser:
In the terminal provided in VScode, type node server.js . Then in your browswer of choice, visit http://localhost:3001/
Each page save for the index should have a recipe for you to try, or in this context, pretend to to try. The "try again" or "go to next tier" buttons should only appear after you have made a selection on the rating radio buttons. Try again refreshes the page.
Some stretch goals I was not able to meet in the deadline time are, making the radio buttons lock on one selection until you hit try again, using local storage to save user progress, designing a chart to show the user how much progress through the tree they have made. There is "sample text" in the index.html where the chart would have gone. You can uncomment that, and the ".chart" class in css, if you would like to see in the browser where it would have been on the index page.
I also would have liked to to have more than one recipe on tier two and three's pages, but could not find the time to implement multiple radio button sections. To offset this at the time, I created more pages to hold more recipes and give the user more of a feeling of going through more recipes.
As of right now, the recipes are not exactly what I envisioned for my site, because I am using the recipes from the api listed above. 


Thank you.




