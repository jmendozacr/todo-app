import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({ tasks, setTasks, showComplete }) => {
    const updateTask = (id, newTask) => {
        setTasks(tasks.map(item => {
            if(item.id === id) {
                return {...item, text: newTask}
            }
            return item;
        }))
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(item => {
            if(item.id === id) {
                return {...item, complete: !item.complete }
            }
            return item;
        }));
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <ul className="list">
            {
                tasks.length > 0 ?
                    tasks.map(item => {
                        if(showComplete) {
                            return <Task 
                                        key={item.id}
                                        item={item}
                                        updateTask={updateTask}
                                        toggleComplete={toggleComplete}
                                        removeTask={removeTask}/>
                        } else if(!item.complete) {
                            return <Task 
                                        key={item.id}
                                        item={item}
                                        updateTask={updateTask}
                                        toggleComplete={toggleComplete}
                                        removeTask={removeTask}/>
                        }
                        return;
                    })
                    : <div className="list__message">No tasks added</div>
            }
        </ul>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    setTasks: PropTypes.func,
    showComplete: PropTypes.bool,
}

export default TaskList;
