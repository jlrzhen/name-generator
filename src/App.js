import { useState } from 'react';
import './App.css';
import logoGH from './images/GitHub-Mark-32px.png'
import logoGHWhite from './images/GitHub-Mark-32px-White.png'
import findName from './functions/findName'

/* TODO: 
  - Work on CSS, add animations
  - separate code into smaller files
  - create api to return names 
  - Add links to copy to clipboard
    after clicking name
  - Clean files
  - Add sources for icon
*/

function App() {
  const [name, setName] = useState(null);
  const [input, setInput] = useState(null);
  const [randEnabled, setRandEnabled] = useState(false);
  const [theme, setTheme] = useState("Start");

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
          setName(findName(xhr.response));
        }
      }
      xhr.open('GET', url + params + input);
      xhr.send();
    }
  }

  const handleReset = () => {
    setName(null); 
    setInput(null);
    document.getElementById("themeInput").value = null;
  }

  const handleThemeChange = () => {
    theme==="Start" || theme==="Dark" ? setTheme("Light") : setTheme("Dark");
  }

  return (
    <div className="App">
      <header className={`App-header${theme}`}>
        <a className={`link${theme}`} href="https://www.datamuse.com/api/">Datamuse API</a>
        <br/>
        <div>
          {theme==="Start" || theme==="Dark" ? 
            <a href="https://github.com/jlrzhen/name-generator">
              <img src={logoGHWhite} alt="GitHub Mark"/> 
            </a>
            : 
            <a href="https://github.com/jlrzhen/name-generator">
              <img src={logoGH} alt="GitHub Mark"/>
            </a>
          }
          <span> </span>
          <a className={`link${theme}`} href="https://github.com/jlrzhen/name-generator">GitHub repository</a>
        </div>
        <h1>Name Generator</h1>
        
        <div>
          <label>Change Theme </label>
          <button
            onClick = {handleThemeChange}
          >{
            theme==="Start"?"Light Mode"
            :theme==="Light"?"Dark Mode"
            :"Light Mode"
          }</button>
          {/* <p>{`Theme: ${theme}`}}</p> */}
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
