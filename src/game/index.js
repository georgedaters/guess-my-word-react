import useGameState from "./useGameState";
import Guesses from "./Guesses";
import GuessInput from "./GuessInput";
import InvalidGuess from "./InvalidGuess";
import TryAnotherWord from "./TryAnotherWord";
import GameResult from "./GameResult";
const Game = ({ currentWord, isKnownWord, tryAnotherWord }) => {
    const {
        isBeforeGuesses,
        isAfterGuesses,
        guessWord,
        invalidGuess,
        solvedState,
        giveUp,
    } = useGameState(isKnownWord, currentWord);

    return (
        <div>
            {isAfterGuesses.length > 0 && (
                <Guesses label="my word is after:" guesses={isAfterGuesses} />
            )}

            {!solvedState && (
                <GuessInput onClick={guessWord} currentWord={currentWord} />
            )}

            {solvedState && (
                <GameResult
                    currentWord={currentWord}
                    solvedState={solvedState}
                />
            )}

            {invalidGuess && <InvalidGuess message={invalidGuess} />}
            {isBeforeGuesses.length > 0 && (
                <Guesses label="my word is before:" guesses={isBeforeGuesses} />
            )}

            {!solvedState &&
                isBeforeGuesses.length + isAfterGuesses.length > 0 && (
                    <button className="give-up" onClick={giveUp}>
                        Give up :(
                    </button>
                )}

            {isBeforeGuesses.length + isAfterGuesses.length > 0 && (
                <TryAnotherWord onClick={tryAnotherWord} />
            )}
        </div>
    );
};

export default Game;
