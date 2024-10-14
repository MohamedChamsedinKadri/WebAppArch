import React, {useState} from "react";

function Counter(props) {
    const [count, setCount ]=useState(0)
    const handleIncrement =()=>{
        setCount(count+1);
    };
    const handleDecrement=() =>{
        setCount(count-1);
    };
    return(
        <div>
            <h2>{props.title}</h2>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}> +</button>
            <button onClick={handleDecrement}> -</button>
        </div>
    );

}
export default Counter;