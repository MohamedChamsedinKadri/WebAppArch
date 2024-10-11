
export default function UserDetails(props){
    const {id, name, age, clickHandler} = props;
    return (
        <tr>
            <th scope="row">Id: {id}</th>
            <td>Name: {name}</td>
            <td>Age: {age}</td>
            <td onClick={() => clickHandler(id)}>X</td>
        </tr>
    );
}