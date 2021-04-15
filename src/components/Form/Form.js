import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ tasks, setTasks }) => {
    const [value, setValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                text: value,
                complete: false
            }
        ])

        setValue("");
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form action="" className="task-form" onSubmit={onSubmit}>
            <input
                type="text"
                className="task-form__input"
                placeholder="write your task"
                value={value}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit" className="task-form__btn">
                <FontAwesomeIcon className="task-form__icon-btn" icon={faPlusSquare}/>
            </button>
        </form>
    )
}

Form.propTypes = {
    tasks: PropTypes.array,
    setTasks: PropTypes.func,
}

export default Form;
