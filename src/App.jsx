import './App.css';
import cookieImage from './assets/images/cookie.png';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Cookie Clicker</h1>
        <h2>Count: </h2>
        <img className="cookie" src={cookieImage}></img>
      </div>
    </div>
  )
}

const updateCount = () => setCount(count + multiplier);

export default App;