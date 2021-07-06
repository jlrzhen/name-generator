import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);

  const handleClick = () => {
    setName("Name");
  }

  const xhr = new XMLHttpRequest();
  const url = "https://api.datamuse.com/words?";
  const params = "rel_jja=name";
  xhr.responseType = 'json';
  xhr.open('GET', url + params);
  xhr.onload = () => {
    console.log(xhr.response);
  };
  xhr.send();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Name Generator</h1>
        {!name ? <button onClick={handleClick}>Generate Name</button>
        : <>
        <h2>Result: {name}</h2>
        <button onClick={() => {setName(null);}}>New Name</button>
        </>}            
      </header>
    </div>
  );
}

export default App;
