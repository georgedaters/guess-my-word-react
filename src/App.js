import "./App.css";
import Game from "./game/";
import AppHeading from "./AppHeading";
import dictionaryTextFile from "./dictionary/sowpods.txt";
import PossibleWords from "./PossibleWords";
import { useState, useEffect } from "react";

function App() {
    const [dictionary, setDictionary] = useState(new Set());
    const [currentWord, setCurrentWord] = useState("");

    const pickRandomWord = (wordsArray) => {
        const randomIndex = Math.floor(Math.random() * wordsArray.length);
        const newWord = wordsArray[randomIndex];
        console.log(`Setting word to '${newWord}'`);
        setCurrentWord(wordsArray[randomIndex]);
    };

    const tryAnotherWord = () => {
        pickRandomWord(PossibleWords);
    };

    useEffect(() => {
        const fetchDictionary = async () => {
            const response = await fetch(dictionaryTextFile);
            const textContent = await response.text();

            const words = textContent.split(/\r?\n/);
            const set = new Set();

            for (const w of words) {
                if (w) {
                    set.add(w);
                }
            }

            console.log(`Got a dictionary of ${set.size} words`);
            console.log(
                `Got a possible word list of ${PossibleWords.length} words`
            );
            setDictionary(set);

            pickRandomWord(PossibleWords);
        };

        fetchDictionary();
    }, []);

    const isKnownWord = (w) => {
        const result = dictionary.has(w);
        console.log(`Checking if '${w}' is known: ${result}`);
        return result;
    };
    return (
        <>
            <AppHeading />
            {dictionary.size > 0 && currentWord && (
                <Game
                    key={currentWord}
                    currentWord={currentWord}
                    isKnownWord={isKnownWord}
                    tryAnotherWord={tryAnotherWord}
                />
            )}

            {dictionary.size === 0 && <div>Loading...</div>}
        </>
    );
}

export default App;
