const GameResult = ({ solvedState, currentWord }) => {
    const classes = `game-result ${solvedState}`;

    return (
        <div className={classes}>
            <label>my word is:</label>
            <div className="solved-word">{currentWord}</div>
            <div className="remark">
                {solvedState === "won"
                    ? "Well done!"
                    : "Too bad, better luck next time!"}
            </div>
        </div>
    );
};

export default GameResult;
