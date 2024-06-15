import React from "react";
import styles from "../styles/Input.module.css";
import PropTypes from "prop-types";

const Input = ({ id, type, label, placeholder, value, onChange }) => {
    return (
        <div>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.input}
            />
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;
