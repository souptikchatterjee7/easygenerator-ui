import React from "react";
import "../styles.css";
import styles from "../styles/Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loader;
