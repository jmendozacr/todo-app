import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({ item }) => {
    return (
        <li className="list__task">
            <FontAwesomeIcon 
                className="list__icon list__icon-check"
                icon={faCheckSquare}
            />
            <div className="list__text">
                {item.text}    
            </div>
            <div className="list__container-buttons">
                <FontAwesomeIcon 
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
