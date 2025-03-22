//localStorage

const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios'); 
const path = require('path');



//require('dotenv').config();
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
app.get('/tier2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tier2.html'));
  });
// Example API endpoint to fetch data using the API key
app.get('/api/data/tier2', async (req, res) => {
  try {
    // Replace this with the actual API endpoint you need to call
    const apiUrl = 'https://api.api-ninjas.com/v1/recipe?query=fried egg'; 
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
app.get('/tier2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tier3.html'));
  });
// Example API endpoint to fetch data using the API key
app.get('/api/data/tier3', async (req, res) => {
  try {
    // Replace this with the actual API endpoint you need to call
    const apiUrl = 'https://api.api-ninjas.com/v1/recipe?query=boiled eggs'; 
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

// Example API endpoint to fetch data using the API key
app.get('/api/data/tier4', async (req, res) => {
  try {
    // Replace this with the actual API endpoint you need to call
    const apiUrl = 'https://api.api-ninjas.com/v1/recipe?query=poached eggs'; 
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
// Api call tier5
app.get('/api/data/tier5', async (req, res) => {
  try {
    // Replace this with the actual API endpoint you need to call
    const apiUrl = 'https://api.api-ninjas.com/v1/recipe?query=souffle'; 
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