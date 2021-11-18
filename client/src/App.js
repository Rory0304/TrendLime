import './App.css';
import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    const test = async() => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/API/testapp/?q=12321');
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
    test()
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
