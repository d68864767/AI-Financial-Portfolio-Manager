# AI Financial Portfolio Manager

AI Financial Portfolio Manager is a financial portfolio management tool integrating Google Cloud AI for data analysis, investment recommendations, and risk assessment.

## Features

- Display of portfolio data
- Investment recommendations
- Risk assessment

## Installation

Before starting, make sure you have Node.js and npm installed on your machine.

1. Clone the repository:
```
git clone https://github.com/yourusername/ai-financial-portfolio-manager.git
```
2. Navigate into the project directory:
```
cd ai-financial-portfolio-manager
```
3. Install the dependencies:
```
npm install
```
4. Start the server:
```
npm start
```
The application will be running at `http://localhost:3000`.

## Usage

Open `index.html` in your browser to use the application.

## Configuration

The `config.json` file contains the URLs for the APIs used to fetch the portfolio data, investment recommendations, and risk assessment data. You can replace these with your own API URLs if needed.

```json
{
    "portfolioAPI": "https://api.example.com/portfolio",
    "recommendationsAPI": "https://api.example.com/recommendations",
    "riskAPI": "https://api.example.com/risk"
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

ISC
