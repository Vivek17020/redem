import { connectWallet, sendToken } from './tonx.js';

let walletAddress = '';
let score = 0;
let level = 1;
let timeLeft = 60;

// Connect Wallet
document.getElementById('connect-wallet').addEventListener('click', async () => {
    walletAddress = await connectWallet();
    document.getElementById('wallet-address').innerText = `Wallet: ${walletAddress}`;
    document.getElementById('item').style.display = 'block';

    // Start the game
    startGame();
});

// Game Logic
function startGame() {
    // Play background music
    const bgMusic = document.getElementById('background-music');
    bgMusic.play();

    // Start the timer
    const timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);

    // Spawn items
    setInterval(() => {
        if (timeLeft > 0) spawnItem();
    }, 3000);
}

function spawnItem() {
    const item = document.getElementById('item');
    const gameArea = document.getElementById('game-area');
    const maxWidth = gameArea.clientWidth - item.offsetWidth;
    const maxHeight = gameArea.clientHeight - item.offsetHeight;

    // Randomize item position
    item.style.left = `${Math.random() * maxWidth}px`;
    item.style.top = `${Math.random() * maxHeight}px`;

    // Click handler for item
    item.onclick = async () => {
        score++;
        document.getElementById('score').innerText = `Tokens Collected: ${score}`;
        document.getElementById('click-sound').play();

        // Send token (mock or real)
        await sendToken(walletAddress, 1);

        // Level up every 10 tokens
        if (score % 10 === 0) {
            level++;
            document.getElementById('level').innerText = `Level: ${level}`;
        }
    };
}

function endGame() {
    alert(`Game Over! You collected ${score} tokens.`);
    document.getElementById('item').style.display = 'none';
}
