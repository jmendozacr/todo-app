import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">To do List</h1>
            <button className="header__button">
                Do not show completed
                <FontAwesomeIcon className="header__icon-button" icon={faEye}/>
            </button>
        </header>
    )
}

Header.propTypes = {

}

export default Header;
