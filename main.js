// Import necessary modules
const axios = require('axios');
const config = require('./config.json');

// Get HTML elements
const portfolioData = document.getElementById('portfolio-data');
const recommendationsData = document.getElementById('recommendations-data');
const riskData = document.getElementById('risk-data');

// Function to fetch portfolio data
async function fetchPortfolioData() {
    try {
        const response = await axios.get(config.portfolioAPI);
        portfolioData.innerHTML = JSON.stringify(response.data, null, 2);
    } catch (error) {
        console.error('Error fetching portfolio data:', error);
    }
}

// Function to fetch investment recommendations
async function fetchRecommendationsData() {
    try {
        const response = await axios.get(config.recommendationsAPI);
        recommendationsData.innerHTML = JSON.stringify(response.data, null, 2);
    } catch (error) {
        console.error('Error fetching recommendations data:', error);
    }
}

// Function to fetch risk assessment data
async function fetchRiskData() {
    try {
        const response = await axios.get(config.riskAPI);
        riskData.innerHTML = JSON.stringify(response.data, null, 2);
    } catch (error) {
        console.error('Error fetching risk data:', error);
    }
}

// Fetch data when page loads
window.onload = function() {
    fetchPortfolioData();
    fetchRecommendationsData();
    fetchRiskData();
};
