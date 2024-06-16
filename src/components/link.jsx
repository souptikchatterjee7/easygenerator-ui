import React from "react";
import styles from "../styles/Link.module.css";
import PropTypes from "prop-types";

const Link = ({ text, type, label, href, onClick }) => {
    return (
        <p className={styles.Link}>
            {text}
            <a
                className={`${type === "success" ? styles.success : styles.console.error}`}
                href={href}
                onClick={onClick}>
                {label}
            </a>
        </p>
    );
};

Link.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    href: PropTypes.isRequired,
    onClick: PropTypes.func
};

export default Link;
