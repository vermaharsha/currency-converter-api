// currencyService.js
const axios = require("axios");

const convertCurrency = async (from, to, amount) => {
  const apiKey = process.env.CURRENCY_API_KEY;
  const url = `${process.env.CURRENCY_API_URL}/${apiKey}/pair/${from}/${to}/${amount}`;

  const response = await axios.get(url);
  if (response.data.result === "error") {
    throw new Error(response.data["error-type"]);
  }

  return {
    rate: response.data.conversion_rate,
    convertedAmount: response.data.conversion_result
  };
};

module.exports = { convertCurrency };
