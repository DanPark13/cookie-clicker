import './App.css';
import {useState} from 'react';
import cookieImage from './assets/images/cookie.png';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Cookie Clicker</h1>
        <h2>Count: {count}</h2>
        <img className="cookie" src={cookieImage} onClick={updateCount}></img>
      </div>
    </div>
  )
}

const updateCount = () => setCount(count + multiplier);

export default App;