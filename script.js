let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
	return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
	const userDifference = getAbsoluteDistance(userGuess, targetNumber);
	const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

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

const advanceRound = () => {
	currentRoundNumber += 1;
}

const getAbsoluteDistance = (num1, num2) => {
	return Math.abs(num1 - num2);
}

/*

You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.
*/