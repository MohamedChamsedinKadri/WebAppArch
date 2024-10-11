export default function UserDetails(props){
    const {id, name, age, clickHandler} = props
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td onClick={() =>clickHandler(id)}>X</td>
        </tr>
    );
}