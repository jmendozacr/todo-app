import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({ tasks }) => {
    return (
        <ul className="list">
            {
                tasks.length > 0 ?
                    tasks.map(item => {
                        return <Task key={item.id} item={item}/>
                    })
                    : <div className="list__message">No tasks added</div>
            }
        </ul>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array,
}

export default TaskList;
