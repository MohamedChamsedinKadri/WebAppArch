import {useState, useCallback, useMemo} from "react";
import UserDetails from "./UserDetails";

export default function UserList() {
    // console.log('inside UserList...');
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([
        {id: 1, name: 'John', age: 20},
        {id: 2, name: 'Edward', age: 19},
        {id: 3, name: 'Tomcam', age: 18},
        {id: 4, name: 'Yoyo', age: 17},
        {id: 5, name: 'JJ', age: 16}
    ]);

    const deleteById = useCallback(id => {
        setUsers(users.filter(u => u.id !== id));
    }, [users]);

    const plusOne = useMemo(() => () => setCount(count + 1), [count]);

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={plusOne}>+1</button>
            <hr/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(u => <UserDetails key={u.id} {...u} clickHandler={deleteById}/>)
                }
                </tbody>
            </table>
        </>
    );
}