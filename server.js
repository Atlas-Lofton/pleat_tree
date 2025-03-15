//localStorage

const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios'); 
const path = require('path');



dotenv.config(); // Load environment variables from .env

const app = express();
const port = 3001; // Or any port you prefer
app.use(express.static(path.join(__dirname, 'public')));
const apiKey = process.env.apiKey;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
// Example API endpoint to fetch data using the API key
app.get('/api/data', async (req, res) => {
  try {
    // Replace this with the actual API endpoint you need to call
    const apiUrl = 'https://api.api-ninjas.com/v1/recipe?query=scrambled eggs'; 
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Api-Key': apiKey
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Serve static files (if needed)
//app.use(express.static('javascript'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});