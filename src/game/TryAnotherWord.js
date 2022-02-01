const TryAnotherWord = ({ onClick, label }) => {
    return (
        <div className="play-again">
            <button onClick={onClick}>{label || "Try another word"}</button>
        </div>
    );
};

export default TryAnotherWord;
