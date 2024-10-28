import React from 'react';
import phrases from'../data/phrases.json';
import randomIndex from '../services/randomIndex';
import bgArray from '../data/bgArray.json';

const ButtonPhrase = ({setQuote, setBgApp}) => {
    
    
    const handleButton = () => {
      const bgIndex = randomIndex(bgArray);
        const sentence = randomIndex(phrases);
        setQuote(sentence);
        setBgApp(bgIndex);
    }
  
  return (
    <button onClick={handleButton}>Probar mi suerte</button>

    
  ) 
 
}

export default ButtonPhrase;