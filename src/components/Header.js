import React from "react";
import styles from "./Header.module.css";

const Header = ({ tasks }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.flex}>Simple Todo List</h1>
      <p className={styles.absolute}>Items todo: {tasks.length}</p>
    </div>
  );
};

export default Header;
