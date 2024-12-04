import axios from 'axios';

const API_BASE = 'https://api.tonxapi.com'; // Replace with your TONX API endpoint

export async function connectWallet() {
    const walletAddress = prompt('Enter your TON Wallet Address:');
    return walletAddress;
}

export async function sendToken(walletAddress, amount) {
    try {
        const response = await axios.post(`${API_BASE}/sendToken`, {
            to: walletAddress,
            amount: amount,
        });
        console.log('Token sent:', response.data);
    } catch (error) {
        console.error('Error sending token:', error);
    }
}
