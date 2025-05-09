import './App.css';
import React,{useState} from 'react';
import Home from './Home';

function App() {

  const [text,setText]=useState("");

  return (
    <div className="App">
      <Home
      text={text}
      setText={setText}
      />
    </div>
  );
}

export default App;
