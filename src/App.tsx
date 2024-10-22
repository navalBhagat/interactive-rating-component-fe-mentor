import { useState } from 'react';
import './App.css';
import ThankYouComponent from './components/ThankYouComponent';
import RatingComponent from './components/RatingComponent';
import { Option } from './types';

function App() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  return <main className="content">
    {isSubmitted && <ThankYouComponent selectedOption={selectedOption}/>}
    {!isSubmitted && 
      <RatingComponent 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
        setIsSubmitted={setIsSubmitted} 
      />
    }
  </main>
}

export default App;
