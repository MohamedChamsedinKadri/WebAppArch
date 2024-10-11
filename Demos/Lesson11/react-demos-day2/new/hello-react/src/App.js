import logo from './logo.svg';
import './App.css';
import StateHookDemo from "./state-hook/StateHookDemo";
import RefHookDemo from "./ref-hook/RefHookDemo";
import UserList from "./communication/UserList";


function App() {
  return (
    <div className="App">
      Week 2 Day 2 - Afternoon Hooks
        {/*<StateHookDemo />*/}
        {/*<hr />*/}
        {/*<RefHookDemo />*/}
        <UserList />
    </div>
  );
}

export default App;
