import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';

const App = () => {
    // get tasks from localstorage
    const savedTasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    const [tasks, setTasks] = useState(savedTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const getShowComplete = localStorage.getItem("showComplete") ? JSON.parse(localStorage.getItem("showComplete")) : true;
    const [showComplete, setShowComplete] = useState(getShowComplete);
    useEffect(() => {
        localStorage.setItem("showComplete", showComplete.toString());
    }, [showComplete])

    return (
        <div className="container">
            <Header 
                showComplete={showComplete}
                setShowComplete={setShowComplete}
            />
            <Form 
                tasks={tasks}
                setTasks={setTasks}
            />
            <TaskList 
                showComplete={showComplete}
                tasks={tasks}
                setTasks={setTasks}
            />
        </div>
    );
}

export default App;
    