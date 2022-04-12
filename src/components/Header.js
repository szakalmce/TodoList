import React from "react";
import styles from "./Header.module.css";

const Header = ({ tasks }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.flex}></p>
      <h1 className={styles.flex}>Simple Todo List</h1>
      <p>Items todo : {tasks.length}</p>
    </div>
  );
};

export default Header;
