import {useState, useCallback, useMemo} from "react";

import UserDetails from "./UserDetails";

export default function UserList({userData = []}) {

    const [users, setUsers] = useState(userData);

    const addNewUser = useCallback(() =>{
        setUsers([...users, {id: users.length+1, name: 'John', age: 12}])
    }, [users]);

    const deleteUserById = useCallback(id => {
        setUsers(users.filter(u => u.id !== id));
    }, [users]);

    return (
        <div>
            <h1>User Data</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map(u => <UserDetails key={u.id} {...u} clickHandler={deleteUserById}/>)}
                </tbody>
            </table>
            <button onClick={addNewUser}>Add a new User</button>
        </div>
    );
}