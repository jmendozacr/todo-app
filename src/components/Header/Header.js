import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Header = ({ showComplete, setShowComplete }) => {
    return (
        <header className="header">
            <h1 className="header__title">To do List</h1>
            <button className="header__button" onClick={() => setShowComplete(!showComplete)}>
                {
                    showComplete ?
                    <>
                        Do not show completed
                        <FontAwesomeIcon className="header__icon-button" icon={faEyeSlash}/>
                    </>
                    :<>
                        Show completed
                        <FontAwesomeIcon className="header__icon-button" icon={faEye}/>
                    </>
                }
            </button>
        </header>
    )
}

Header.propTypes = {
    setShowComplete: PropTypes.func,
    showComplete: PropTypes.bool,
}

export default Header;
