const express = require('express');
const cors = require('cors');
const axios = require('axios');
const config = require('./config.json');

const app = express();
app.use(cors());

// Fetch portfolio data from external API
app.get('/portfolio', async (req, res) => {
    try {
        const response = await axios.get(config.portfolioAPI);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
        res.status(500).send('Error fetching portfolio data');
    }
});

// Fetch investment recommendations from external API
app.get('/recommendations', async (req, res) => {
    try {
        const response = await axios.get(config.recommendationsAPI);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching recommendations data:', error);
        res.status(500).send('Error fetching recommendations data');
    }
});

// Fetch risk assessment data from external API
app.get('/risk', async (req, res) => {
    try {
        const response = await axios.get(config.riskAPI);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching risk data:', error);
        res.status(500).send('Error fetching risk data');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
