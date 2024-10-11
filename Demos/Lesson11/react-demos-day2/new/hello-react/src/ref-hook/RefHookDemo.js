import {useRef} from "react";

export default function RefHookDemo() {

    const input1 = useRef(null);
    const input2 = useRef(null);
    function showData(){
        alert('Wake up, see here is the way to get the value: ' + input1.current.value);
    }

    const popData = () => {
        alert(input2.current.value);
    }
    return (
        <div>
            <input ref={input1}/>
            <button onClick={showData}>Click me</button>
            <input ref={input2} onBlur={popData}/>
        </div>
    ) ;
}