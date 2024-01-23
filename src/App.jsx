
import './App.css';
import phrases from './util/phrases.json';
import randomIndex from './services/randomIndex';
import RandomPhrase from './components/RandomPhrase';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';
import bgArray from './util/baArray.json'


function App() {

  const sentence = randomIndex(phrases);
  const bgIndex = randomIndex(bgArray);

  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex);

  const bgStyle = {
    backgroundImage: `url('../assets/fondo${bgApp}.jpg')`,
  }
  return (
    <div className='app' style={bgStyle}>
      <div className='container'>
      <h1>Galletas de la fortuna</h1>
      <ButtonPhrase 
      setQuote={setQuote}
      setBgApp={setBgApp}
      />
      <RandomPhrase
      quote={quote}
      />
      </div>
    </div>
  )
}

export default App;
