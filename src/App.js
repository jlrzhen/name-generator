import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [input, setInput] = useState(null);

  const handleClick = () => {
    
    setName(null); 
    
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
          let selectedIndexes = [];
          
          /* Maximum index of DataMuse response ranked by
          score, higher values are generally less accurate 
          but provide more options */
          let maxIndex = 30;

          while(
          selectedIndexes.length < 10 && 
          selectedIndexes.length < res.length) {          
            
            let randNum = Math.floor(Math.random()*res.length); 
            
            if(!selectedIndexes.includes(randNum) && randNum < maxIndex) {           
              selectedIndexes.push(randNum);
              newNames.push(res[randNum].word);
            }
          }

          /* 
          TODO: 
          - Work on CSS
          - Change option selection to checkbox
          - Capitalize first letter of each word (add as option)
          */

          /* Convert array of names to string */
          let newNamesString = "";
          for (let i = 0; i < newNames.length; i++) {
            // Remove spaces between words in name
            if(document.getElementById("selSpace").value === "noSpace") {
              newNamesString += newNames[i].split(" ").join("");
            } else {
              newNamesString += newNames[i];
            }
            
            // Append random four digit number to name
            if(document.getElementById("sel").value === "rand") {
              newNamesString += " " + (1000+Math.floor(Math.random()*9000));
            }
            
            if(i < newNames.length - 1) {
              newNamesString += ", ";
            }
          }
          setName(newNamesString);

          /* Response for invalid theme response from API */
          if(newNames < 1) {
            setName("invalid theme");
          }
        } catch(error) {
          console.log(error.message)
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
        <a style={{color: "white"}} href="https://www.datamuse.com/api/">Datamuse API</a>
        <br/>
        <a style={{color: "white"}} href="https://github.com/jlrzhen/name-generator">GitHub repository</a>
        <h1>Name Generator</h1>
        <p>Input options:</p>
       
        <select id="sel">
          <option value="none">None</option>
          <option value="rand">Random Number</option>
        </select>
        <select id="selSpace">
        <option value="noSpace">No Spaces</option>
          <option value="space">Include Spaces</option>
        </select>

        <p>Input Theme:</p>
        <input id="themeInput" disabled={name} onChange={event => setInput(event.target.value)} />
        
        {/* Show name and reset button after generating name */}
        {!name ? <button onClick={handleClick}>Generate Name</button>
        : <>
        <h2>Result: {name}</h2>
        <button onClick={handleClick}>Refresh</button>
        <button onClick={handleReset}>New Name</button>
        </>}            
      </header>
    </div>
  );
}

export default App;
