import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [input, setInput] = useState(null);

  const handleClick = () => {
    
    if(!input) {
      setName("invalid input");
    } else {

      // GET Request for DataMuse api
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
        try {
          let newName = res[Math.floor(Math.random()*8)].word;
          setName(newName);
          if(document.getElementById("sel").value === "rand") {
            setName(`${newName} ${1000+Math.floor(Math.random()*9000)}`);
          }
        } catch(error) {
          //console.log(error.message)
          setName("invalid theme");
        }
        // TODO: display list of possible names
        // TODO: add comments
      }

    }
  }

  const handleReset = () => {
    setName(null); 
    setInput(null);
    document.getElementById("themeInput").value = null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <a style={{color: "white"}} href="https://github.com/jlrzhen/name-generator">GitHub repository</a>
        <h1>Name Generator</h1>
        <p>Input options:</p>
        <select id="sel">
          <option value="none">None</option>
          <option value="rand">Random Number</option>
        </select>
        <p>Input Theme:</p>
        <input id="themeInput" onChange={event => setInput(event.target.value)} />
        {!name ? <button onClick={handleClick}>Generate Name</button>
        : <>
        <h2>Result: {name}</h2>
        <button onClick={handleReset}>New Name</button>
        </>}            
      </header>
    </div>
  );
}

export default App;