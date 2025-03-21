# pleat_tree

Thank you for looking at the mid-way progress of my capstone. Because I doubt you want to spend hours cooking to test the site, pretending you've cooked the recipes is more than welcome.
In the terminal provided in VScode, type node server.js. Then in your browswer of choice, visit http://localhost:3001/
Read through the site and click the buttons as you please.
Thank you.


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
run test with npm test





(I have no idea if the text under this line is necessary. I worry my api key won't work for other users since it's hidden and have started drafting instructions for that. Please ignore for now.)
To see the recipes, visit _____ and copy the api key provided. in a .env file, write in your api key using this template:
apiKey ='-----------'
