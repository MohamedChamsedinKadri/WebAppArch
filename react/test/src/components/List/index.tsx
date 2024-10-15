import React from "react";
import './index.css';
import Item from "../Item";
import Todo from "../Types/Todo";


type PropsType={
    todos:Todo[]
}

export default function List(todos:PropsType) {
    return (
        <ul className="todo-main">
            {todos.map(todo=><Item key={todo.id}{...todo}/>)}
        </ul>

    );


}

