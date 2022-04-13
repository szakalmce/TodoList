import React from "react";
import styles from "./Header.module.css";

const Header = ({ tasks }) => {
  const doneTasks = tasks.filter((item) => item.isDone === true);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.flex}>Simple Todo List</h1>
      <div className={styles.absolute}>
        <p>Items todo: {tasks.length}</p>
        <p>Items done: {doneTasks.length}</p>
      </div>
    </div>
  );
};

export default Header;
