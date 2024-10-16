import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import {render} from "@testing-library/react";

class App extends React.Component() {
  state={
    newFiles:null,
  };
  handlefile(e){
    //getting the file from the input
    let newfiles=e.target.newFiles;
    this.setState({newfiles});
  }
  handleUpload(e){
    let newfiles=this.state.newFiles;
    let formData=new FormData();

    formData.append("image", newfiles);
    formData.append("name", "Name");

    axios({
      url: "http://localhost:8080/files",
      method: "POST",
      headers: {
        // Add any auth token here
        authorization: "your token comes here",

    })
  }
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
