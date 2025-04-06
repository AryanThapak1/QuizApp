
import React from "react";
import styles from "./LoadingBar.module.css"; 

const LoadingBar = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingBar}></div>
    </div>
  );
};

export default LoadingBar;
