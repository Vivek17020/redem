// Set the score after the game ends
let totalScore = 250; // Example: This is the score from the game, replace it with your game's actual score
let tonValuePerPoint = 0.1; // Example: Each point = 0.1 TON tokens
let requiredScore = 200; // Example: Score needed for redemption

// Display total score
document.getElementById('score-value').textContent = totalScore;

// Show the redeem button when the game ends
function openRedeemPopUp() {
    // Calculate the TON value based on the score
    const tonValue = totalScore * tonValuePerPoint;

    // Update the modal content
    document.getElementById('modal-score').textContent = totalScore;
    document.getElementById('ton-value').textContent = tonValue.toFixed(2);
    document.getElementById('required-score').textContent = requiredScore;

    // Update goodies image
    const goodiesImage = document.getElementById('goodies-image');
    if (totalScore >= requiredScore) {
        goodiesImage.src = "goodies.png"; // Replace with your actual goodies image path
    } else {
        goodiesImage.src = "no_goodies.png"; // Replace with an image for "not enough score"
    }

    // Display the modal
    document.getElementById('redeem-modal').style.display = 'block';
}

// Close the redeem pop-up
function closeRedeemPopUp() {
    document.getElementById('redeem-modal').style.display = 'none';
}

// Withdraw the TON tokens (example function for interaction with blockchain)
async function withdrawTON() {
    const tonValue = totalScore * tonValuePerPoint;

    // Simulate the transfer of TON tokens (replace with actual blockchain interaction)
    alert(`Withdrawing ${tonValue.toFixed(2)} TON to your wallet...`);

    // Close the pop-up after withdrawal
    closeRedeemPopUp();

    // Here you would interact with the Web3 or blockchain functionality to actually transfer the tokens
    // Example using ethers.js:
    // const contract = new ethers.Contract(tonTokenAddress, tonTokenAbi, signer);
    // await contract.transfer(playerAddress, ethers.utils.parseUnits(tonValue.toString(), 18));
}
