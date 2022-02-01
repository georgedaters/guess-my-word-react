const Guesses = ({ guesses, label }) => {
    return (
        <div className="guesses">
            <label>{label}</label>
            {guesses.map((guess) => (
                <div key={guess} className="guess">
                    {guess}
                </div>
            ))}
        </div>
    );
};

export default Guesses;
