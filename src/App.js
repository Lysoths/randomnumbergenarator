import "./App.css";
import React, { useState } from "react";

function App() {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(1);
  const [randomNumber, randomNumbers] = useState();

  const randomGenarator = () => {
    if (minVal > maxVal) {
      alert("Minimum değer Maximum değerden büyük olamaz");
    } else {
      randomNumbers(Math.floor(Math.random() * maxVal - minVal));
    }
  };
  return (
    <div className='container'>
      <div className='numbers-container'>
        <div>
          <div className='min-number'>
            <p>Min Number</p>
            <input
              type='number'
              name=''
              id=''
              placeholder='Please enter a min-number'
              value={minVal}
              onChange={(e) => setMinVal(e.target.value)}
            />
          </div>
          <div className='max-number'>
            <p>Max Number</p>
            <input
              type='number'
              placeholder='Please enter a max-number'
              value={maxVal}
              onChange={(e) => setMaxVal(e.target.value)}
            />
          </div>

          <p>Random Number = {randomNumber}</p>
        </div>
        <button onClick={randomGenarator}>Click Me !</button>
      </div>
    </div>
  );
}

export default App;
