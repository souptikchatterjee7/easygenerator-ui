import React from "react";
import styles from "../styles/Button.module.css";
import PropTypes from "prop-types";

const Button = ({ type, label, onClick }) => {
    return (
        <div className={styles.buttonDiv}>
            <button className={styles.button} type={type} onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;
