import './App.css';
import Greeting from './greeting'
import React from "react";
import Counter from "./counter";

function App() {
  return (
    <div className="App">
      <Greeting/>
      <Counter title="My Counter"/>
    </div>
  );
}

export default App;
