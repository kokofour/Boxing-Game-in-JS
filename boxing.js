
// Inital setup of players

let currentPlayer = player1;

let player1 = {
    name : "Player 1",
    health : 100,

};

let player2 = {
    name : "Player2",
    health : 100,
}

// Generate Random Dmg
function generateDamage() {
    returnMath.floor (Math,random() * 10) + 1  // the value ranges from 1 to 10

}


function applyDamage(opponent, damage) {
    if (damage < 6) {
        console.log(`${currentPlayer.name} lands a basic hit on ${opponent.name}!`);
    } else if (damage >= 6 && damage <= 9) {
        console.log(`${currentPlayer.name} lands a critical hit on ${opponent.name}!`);
    } else {
        console.log(`${currentPlayer.name} lands a KNOCKOUT on ${opponent.name}! 🥊`);
    }

    opponent.health -= damage;

    // Makes sure that the health doesn't drop below 0
    if (opponent.health <= 0) {
        opponent.health = 0;
    }

    console.log(`${opponent.name}'s health is now ${opponent.health}.`);
}

// Create a function that checks for knockout
function checkKnockout(opponent) {
    if (opponent.health === 0) {
        console.log(`${opponent.name} has been knocked out!`);
        console.log(`${currentPlayer.name} is the WINNER! 🏆`);
        return true; // Game over
    }
    return false;
}

// Switch turns function
function switchTurns() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    console.log(`It's now ${currentPlayer.name}'s turn.`);
}


function playTurn() {
    let opponent = currentPlayer === player1 ? player2 : player1;

    const damage = generateDamage();
    applyDamage(opponent, damage);

    if (checkKnockout(opponent)) {
        return false; // Stop the game if there's a knockout
    }

    switchTurns();
    return true; // Continue the game
}



function startGame() {
    console.log("Starting the Boxing Game!");
    console.log(`${player1.name} vs ${player2.name}`);

    while (player1.health > 0 && player2.health > 0) {
        if (!playTurn()) break; // Stop the game if there's a knockout
    }

    console.log("Game Over. Thanks for playing!");
}



// Start the game
startGame();

















