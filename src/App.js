import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            text: "go to the store",
            complete: false
        },
        {
            id: uuidv4(),
            text: "go to the work",
            complete: false
        },
        {
            id: uuidv4(),
            text: "do my homework",
            complete: true
        }
    ]);

    // console.log("tasks", tasks);

    return (
        <div className="container">
            <Header/>
            <Form tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks}/>
        </div>
    );
}

export default App;
    