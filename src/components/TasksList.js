import React, { useState } from "react";
import ListItem from "./ListItem";
import styles from "./TaskList.module.css";

const TasksList = ({ tasks, setTasks }) => {
  const handleRemove = (id) => {
    const newList = tasks.filter((task) => task.id !== id);

    setTasks(newList);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <div className={styles.task} key={task.id}>
            <ListItem setTasks={setTasks} tasks={tasks} task={task} />
            <button onClick={() => handleRemove(task.id)}>Remove item</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
