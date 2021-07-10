import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [input, setInput] = useState(null);

  const handleClick = () => {
    const xhr = new XMLHttpRequest();
    const url = "https://api.datamuse.com/words?";
    const params = "rel_gen=";
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        findName(xhr.response);
      }
    }
    xhr.open('GET', url + params + input);
    xhr.send();

    const findName = (res) => {
      setName(res[Math.floor(Math.random()*3)].word);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <a style={{color: "white"}} href="https://github.com/jlrzhen/name-generator">GitHub repository</a>
        <h1>Name Generator</h1>
        <p>Input Theme:</p>
        <input onChange={event => setInput(event.target.value)} />
        {!name ? <button onClick={handleClick}>Generate Name</button>
        : <>
        <h2>Result: {name}</h2>
        <button onClick={() => {setName(null); setInput(null);}}>New Name</button>
        </>}            
      </header>
    </div>
  );
}

export default App;
