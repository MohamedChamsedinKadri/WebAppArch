import React, {useState} from "react";
import './App.css';


function App() {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        setCounter(counter - 1);
    }

    return (
        <div className="App">

            <p>Counter {counter}</p>

            <button onClick={increaseCounter}>Count++</button>
            <br/>

            <button onClick={decreaseCounter}>Count--</button>

        </div>
    );
}

export default App;
