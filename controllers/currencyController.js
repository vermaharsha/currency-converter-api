// currencyController.js
const { convertCurrency } = require("../services/currencyService");

const convert = async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ message: "Please provide 'from', 'to', and 'amount'." });
  }

  try {
    const result = await convertCurrency(from.toUpperCase(), to.toUpperCase(), amount);
    res.status(200).json({
      from,
      to,
      amount,
      ...result
    });
  } catch (error) {
    res.status(500).json({ message: "Conversion failed", error: error.message });
  }
};

module.exports = { convert };
