import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({ item }) => {
    const [editingTask, setEditingTask] = useState(false);
    const [newTask, setNewTask] = useState(item.text);

    const handleSubmitTask = (e) => {
        e.preventDefault();
        setEditingTask(false);
    }

    return (
        <li className="list__task">
            <FontAwesomeIcon 
                className="list__icon list__icon-check"
                icon={faCheckSquare}
            />
            <div className="list__text">
                {
                    editingTask ?
                    <form onSubmit={handleSubmitTask} action="" className="form-edit-task">
                        <input 
                            type="text"
                            className="form-edit-task__input"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button type="submit" className="form-edit-task__btn">Update</button>
                    </form>
                    : item.text
                }
            </div>
            <div className="list__container-buttons">
                <FontAwesomeIcon
                    onClick={() => setEditingTask(!editingTask)}
                    className="list__icon list__icon-action"
                    icon={faEdit}
                />
                <FontAwesomeIcon 
                    className="list__icon list__icon-action"
                    icon={faTimes}
                />
            </div>
        </li>
    );
}

Task.propTypes = {
    item: PropTypes.object,
}

export default Task;
