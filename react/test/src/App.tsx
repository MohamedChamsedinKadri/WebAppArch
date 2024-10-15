import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import List from "./components/List";
import {useEffect, useState} from "react";
import Todo from "./components/Types/Todo";
import * as http from "node:http";


function App() {
    const [todos, setTodos]=useState<Todo[]>([]);
    useEffect(() => {
        async function detTodos(){
            const response =await fetch('http://localhost:3004/todos');
            const data= await response.json();
            setTodos(data)
        }


    }, []);


  return (
      <div className="todo-container">
          <div className="todo-wrap">
              <Header/>
              <List todos={todos}/>
              <Footer/>

          </div>
      </div>
  );
}

export default App;
