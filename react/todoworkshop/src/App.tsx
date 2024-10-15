
import './App.css';
import {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([{ name: 'item1', completed: false }, { name: 'item2', completed: false }]);
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { name: taskName, completed: false }]);
    setTaskName('');
  };

  const handleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, idx) =>
        idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteFinishedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-header">
            <input
                type="text"
                value={taskName}
                onChange={handleInputChange}
                placeholder="Enter task name"
            />
            <button onClick={handleAddTask}>Add Task</button>
          </div>
          <ul className="todo-main">
            {tasks.map((task, index) => (
                <li key={index}>
                  <label>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleTaskCompletion(index)}
                    />
                    <span>{task.name}</span>
                  </label>
                  <button className="btn btn-danger" style={{ display: task.completed ? 'block' : 'none' }}>Delete</button>
                </li>
            ))}
          </ul>
          <div className="todo-footer">
          <span>
            Finished {tasks.filter(task => task.completed).length} / total {tasks.length}
          </span>
            <button className="btn btn-danger" onClick={handleDeleteFinishedTasks}>Delete Finished Tasks</button>
          </div>
        </div>
      </div>
  );
}

export default App;
