import {useState} from "react";

function StateHookDemo(){
    const [count, setCount] = useState(10);
    const [students, setStudents] = useState(['JJ', 'Yoyo', 'Tomcam']);
    const plusOne = () => {
        setCount(count+1);
    }

    return (
        <>
            <h1>Counter: {count} </h1>
            <button onClick={plusOne}>+1</button>
            <h1>Student Name</h1>
            <div>
                {students.map(s => <p key={s}>{s}</p>)}
                <button onClick={() => setStudents([...students, 'Appleberry'])}>enroll</button>
            </div>
        </>
    );
}

export default StateHookDemo;