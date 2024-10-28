import { useState } from 'react';
import './App.css';
import RamdonPhrase from './components/RamdonPhrase';
import phrases from './data/phrases.json';
import randomIndex from './services/randomIndex';
import ButtonPhrase from './components/ButtonPhrase';

import bgArray from './data/bgArray.json';


function App() {
 
  const sentence =  randomIndex(phrases);
  const bgIndex = randomIndex(bgArray);

  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex);

  const bgstyle = {
    backgroundImage: `url('../public/assets/fondo${bgApp}.png')`,
  }

  return (
    <div className='app' style={bgstyle}>
      <div className='container'>
       <h1>Galletas de la Fortuna</h1>
       <ButtonPhrase
         setQuote={setQuote}
         setBgApp={setBgApp}
        />
       <RamdonPhrase 
         quote={quote}
        />
       </div>
   </div>
  )
}

export default App;
