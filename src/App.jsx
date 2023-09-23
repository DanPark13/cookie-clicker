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

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button>10 Cookies</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button>100 Cookies</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button>1000 Cookies</button>
        </div>
      </div>
    </div>
  )
}

const updateCount = () => setCount(count + multiplier);

export default App;