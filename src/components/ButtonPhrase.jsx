import React from 'react';
import phrases from '../util/phrases.json';
import randomIndex from '../services/randomindex';
import bgArray from '../util/baArray.json'

const ButtonPhrase = ({setQuote, setBgApp}) => {

        const handleButton = () => {
            const bgIndex = randomIndex(bgArray)
            const sentence = randomIndex(phrases);
            setQuote(sentence);
            setBgApp(bgIndex)
    }
    return (
    <button onClick={handleButton}>Probar mi Suerte</button>
    )
}

export default ButtonPhrase;