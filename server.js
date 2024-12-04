const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// TONX API Setup for Testnet
const TONX_API_URL = 'https://testnet.toncenter.com/api/v2/jsonRPC';
const TONX_API_KEY = '15669c2a-c276-4002-b631-25177ca79cae'; // Replace with your API key

app.use(express.static('public'));
app.use(express.json());

// Endpoint to handle reward distribution
app.post('/reward', async (req, res) => {
    const { wallet, points } = req.body;

    try {
        const result = await axios.post(`${TONX_API_URL}/send`, {
            from: 'UQAwIngTZhKmtkpoX5Jw-ykg8if8k9J0e0BSkStFLHC077Od', // Your wallet address on the testnet
            to: wallet,
            amount: points * 1000000000, // Reward based on points (1 TON = 1,000,000,000 nanotons)
            key: TONX_API_KEY,
        });

        res.json({ message: `Reward of ${points} points sent to wallet ${wallet}` });
    } catch (error) {
        console.error('Error sending reward:', error);
        res.status(500).json({ message: 'Failed to send reward' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
