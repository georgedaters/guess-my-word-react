import { useState } from "react";

const useGameState = (isKnownWord, currentWord) => {
    const [isBeforeGuesses, setIsBeforeGuesses] = useState([]);
    const [isAfterGuesses, setIsAfterGuesses] = useState([]);
    const [invalidGuess, setInvalidGuess] = useState("");
    const [solvedState, setSolvedState] = useState(false);

    const giveUp = () => {
        setSolvedState("lost");
    };

    const guessWord = (guessedWord) => {
        if (!guessedWord) {
            return false;
        }

        guessedWord = guessedWord.toLowerCase();
        console.log(`You guessed '${guessedWord}'`);

        if (/[^a-zA-Z]/.test(guessedWord)) {
            setInvalidGuess(
                "Guess contains invalid characters - only alphanumeric (a-z) allowed"
            );
            return false;
        }

        if (!isKnownWord(guessedWord)) {
            setInvalidGuess("Guess must be an english word");
            return false;
        }

        // Clear invalid guess message
        setInvalidGuess("");

        if (guessedWord === currentWord) {
            setSolvedState("won");
            return true;
        }

        // guess = "apple", word = "because", result = -1, so the word is *after* the guess
        const result = guessedWord.localeCompare(currentWord);

        if (result > 0) {
            const newGuesses = isBeforeGuesses.concat(guessedWord);
            newGuesses.sort((first, second) => first.localeCompare(second));
            setIsBeforeGuesses(newGuesses);
        } else {
            const newGuesses = isAfterGuesses.concat(guessedWord);
            newGuesses.sort((first, second) => first.localeCompare(second));
            setIsAfterGuesses(newGuesses);
        }

        return true;
    };

    return {
        isBeforeGuesses,
        isAfterGuesses,
        guessWord,
        invalidGuess,
        solvedState,
        giveUp,
    };
};

export default useGameState;
