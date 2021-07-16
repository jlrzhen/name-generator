import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [input, setInput] = useState(null);

  const handleClick = () => {
    
    if(!input) {
      setName("invalid input");
    } else {

      /* GET Request for DataMuse  */
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

      /* Displays list of names from DataMuse response */ 
      const findName = (res) => {
        try {
          /* Convert response to array of names */
          let newNames = [];
          for (let i = 0; i < res.length; i++) {
            if (i < 10) {
              newNames.push(res[i].word);
            }
          }
                 
          /* Convert array of names to string */
          let newNamesString = "";
          for (let i = 0; i < newNames.length; i++) {
            newNamesString += newNames[i];
            
            if(document.getElementById("sel").value === "rand") {
              newNamesString += " " + (1000+Math.floor(Math.random()*9000));
            }
            
            if(i < newNames.length - 1) {
              newNamesString += ", ";
            }
          }
          setName(newNamesString);
               
        } catch(error) {
          //console.log(error.message)
          setName("invalid theme");
        }
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
        <input id="themeInput" disabled={name} onChange={event => setInput(event.target.value)} />
        
        {/* Show name and reset button after generating name */}
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
