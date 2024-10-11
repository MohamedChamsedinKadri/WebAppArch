import './App.css';
import Counter from './statehook/count';
import Person from "./statehook/person";
import MyComponent from "./refhook/show-message";
import UserList from "./components/User";
import {userData} from "./data";
import MemoHook from "./memohook/MemoHook";
import HelloComp from "./Hello/HelloComp";



function App() {
    return (
        <div className="App">
            <h1 className="title">Hello from App Comp</h1>
            {/*<Counter/>*/}
            {/*<hr/>*/}
            {/*<Person/>*/}
            {/*<hr/>*/}
            {/*<MyComponent/>*/}
            {/*<hr />*/}
            {/*<UserList userData={userData}/>*/}
            <MemoHook />
            <hr />
            <HelloComp />

        </div>
    );
}

export default App;
