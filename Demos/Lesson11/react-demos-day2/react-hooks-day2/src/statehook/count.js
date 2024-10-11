import {useState} from "react";

export default function Counter(){

    const [count, setCount] = useState(0);
    function increase(){
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Current Count is: {count}</h1>
            <button onClick={increase}>Click Me</button>
        </div>
    );
}