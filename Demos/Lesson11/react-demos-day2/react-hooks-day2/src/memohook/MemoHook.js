import {useCallback, useMemo, useState} from "react";
import memo from './MemoHook.module.css';

export default function MemoHook() {
    const [todoList, setTodoList] = useState([]);
    const [count, setCount] = useState(0);

    const expensiveCalculation = useCallback(num => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    },[]);

    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    // const calculation = expensiveCalculation(count);
    const addTodo = () => {
        setTodoList([...todoList, 'new List']);
    }

    const increaseByOne = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1 className={memo.title}>Todo List</h1>
            {todoList.map((todo, index) => <p key={index}>{todo}</p>)}
            <button onClick={addTodo}>Add a Todo</button>
            <hr/>
            <h1>Count: {count}
                <button onClick={increaseByOne}>+1</button>
            </h1>
            <hr/>
            <h1>Expensive Calculation</h1>
            Result: {calculation}
        </div>
    );
}