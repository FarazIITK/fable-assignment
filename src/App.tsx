import './App.css';
import ArrayInput from './Components/ArrayInput';
import { useState } from 'react';

function App() {
  const [inputArray, setInputArray] = useState<number[]>(
    []
  );

  return (
    <div className="App">
      <h1>Fable Assignment</h1>

      <ArrayInput
        inputArray={inputArray}
        setInputArray={setInputArray}
      />
    </div>
  );
}

export default App;
