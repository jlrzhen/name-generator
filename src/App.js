import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [input, setInput] = useState(null);
  const [randEnabled, setRandEnabled] = useState(false);
  const [lightMode, setLightMode] = useState(true);

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

          /* Generate array of random numbers within index range of 
          API query repsonse */ 
          while(
          selectedIndexes.length < 10 && 
          selectedIndexes.length < res.length) {          
            
            let randNum = Math.floor(Math.random()*res.length); 
            
            if(!selectedIndexes.includes(randNum) && randNum < maxIndex) {           
              selectedIndexes.push(randNum);
              newNames.push(res[randNum].word);
            }
          }

          /* TODO: 
            - Work on CSS, add animations
            - Add links to copy to clipboard
              after clicking name
            - Clean files
            -separate code into smaller files
          */

          /* Convert array of names to string */
          let newNamesString = "";
          for (let i = 0; i < newNames.length; i++) {
            // Capitalize first letter of each word
            if(document.getElementById("caps").value==="allCaps") {
              let capsArr = newNames[i].split(" ");
              capsArr.forEach(
                (name, index) => capsArr[index] = name[0].toUpperCase() + name.slice(1)
              );
              newNames[i] = capsArr.join(" ");
              console.log(capsArr);
            }

            // Capitalize with camelCase 
            if(document.getElementById("caps").value==="camelCase") {
              let capsArr = newNames[i].split(" ");
              capsArr.forEach(
                (name, index) => {
                  if(index>0) {capsArr[index] = name[0].toUpperCase() + name.slice(1)}
                }
              );
              newNames[i] = capsArr.join(" ");
              console.log(capsArr);
            }

            // Remove spaces between words in name
            if(document.getElementById("noSpace").checked) {
              newNamesString += newNames[i].split(" ").join("");
            } else {
              newNamesString += newNames[i];
            }
            
            // Append random four digit number to name
            if(document.getElementById("rand").checked) {
              // Remove space between name and numbers
              if(document.getElementById("noSpaceNum").checked) {
                newNamesString += "" + (1000+Math.floor(Math.random()*9000));
              } else {
                newNamesString += " " + (1000+Math.floor(Math.random()*9000));
              }
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

  const handleThemeChange = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  }

  return (
    <div className="App">
      <header className={lightMode?"App-headerDark":"App-headerLight"}>
        <a className={lightMode?"white":"black"} href="https://www.datamuse.com/api/">Datamuse API</a>
        <br/>
        <a className={lightMode?"white":"black"} href="https://github.com/jlrzhen/name-generator">GitHub repository</a>
        <h1>Name Generator</h1>
        
        <div>
          <label>Change Theme </label>
          <button
            onClick = {handleThemeChange}
          >{lightMode?"Light Mode":"Dark Mode"}</button>
          {/* <p>Dark mode: {lightMode.toString()}</p> */}
        </div>
        <br/>
        
        <section id="selection">
          <label style={{fontWeight: "bold"}}>Input options:</label>
          <br/>
          <label for="rand">Random Number </label>
          <input type="checkbox" id="rand" value="rand"
            onChange = {() => setRandEnabled(document.getElementById("rand").checked)}
          />
          <br/>
          {randEnabled ?
            <>
              <label for="noSpaceNum">No Space Before Number </label>
              <input type="checkbox" id="noSpaceNum" value="noSpaceNum"/>
              <br/> 
            </> : <></>
          }
          <label for="noSpace">No Spaces Between Words </label>
          <input type="checkbox" id="noSpace" value="noSpace"/>
          <br/>
          <label for="caps">Capitalization </label>
          <select id="caps">
            <option value="allCaps">Capitalize First Letters</option>
            <option value="camelCase">camelCase</option>
            <option value="none">none</option>
          </select>
        </section>

        <div><br/>
          <label style={{fontWeight: "bold"}}>Input Keyword: </label>
          <input id="themeInput" disabled={name} onChange={event => setInput(event.target.value)} />
        </div><br/>
        
        {/* Show name and reset button after generating name */}
        {!name ? <button onClick={handleClick}>Generate Name</button>
        : <>
        <h3>Result: {name}</h3>
        <button onClick={handleClick}>Refresh</button>
        <button onClick={handleReset}>New Name</button>
        </>}            
      </header>
    </div>
  );
}

export default App;
