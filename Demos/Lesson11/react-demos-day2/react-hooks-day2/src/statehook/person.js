import {useState} from "react";

export default function Person(){

    const [persons, setPersons] = useState([
        {id: 1, name: 'John', age: 18},
        {id: 2, name: 'Edward', age: 19}
    ]);

    function add(){
        const newP = { id: persons.length + 1, name: 'JJ', age: 2};
        setPersons([newP, ...persons]);
    }

    return (
        <div>
           <ul>
               {persons.map(p => <li key={p.id}>{p.name}, {p.age}</li>)}
           </ul>
            <button onClick={add}>Add a new Person</button>
        </div>
    );
}