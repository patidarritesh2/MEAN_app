const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:city', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=YOUR_API_KEY`
        );
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ message: "Error fetching weather" });
    }
});

module.exports = router;