import {useRef} from "react";

export default function MyComponent() {

    const input1 = useRef(null);
    const input2 = useRef(null);

    function showData1() {
        alert(input1.current.value);
    }

    function showData2() {
        alert(input2.current.value);
    }

    return (
        <div>
            <input ref={input1}/>
            <button onClick={showData1}>Click to see input1 data</button>
            <input ref={input2} onBlur={showData2}/>
        </div>
    );
}