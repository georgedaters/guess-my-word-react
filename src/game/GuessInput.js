import { useState, useRef } from "react";

const GuessInput = ({ onClick }) => {
    const [wordInput, setWordInput] = useState("");
    const onChange = (e) => {
        setWordInput(e.target.value);
    };

    const inputRef = useRef(null);

    const onSubmit = (e) => {
        var result = onClick(wordInput);
        if (result) {
            setWordInput("");
        }

        inputRef.current.focus();

        e.preventDefault();
    };

    return (
        <div className="guess-input">
            <label>my word is:</label>
            <input
                ref={inputRef}
                type="text"
                value={wordInput}
                onChange={onChange}
                placeholder="type a word"
            />

            <button onClick={onSubmit}>Guess</button>
        </div>
    );
};

export default GuessInput;
