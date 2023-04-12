let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
	return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
	const userDifference = Math.abs(targetNumber - userGuess);
	const computerDifference = Math.abs(targetNumber - computerGuess);

	if (userDifference < computerDifference) {
		return true;
	}
	if (userDifference > computerDifference) {
		return false;
	}
	return true;
};

const updateScore = (winner) => {
	if (winner === 'human') {
		humanScore += 1;
	}
	if (winner === 'computer') {
		computerScore += 1;
	}
};


/*

*/