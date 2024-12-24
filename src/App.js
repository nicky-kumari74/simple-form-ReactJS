import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data,setdata]=useState("nicky")
  function updatedata(){
    setdata("ajay")
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updatedata}>click me</button>
    </div>
  );
}

export default App;
