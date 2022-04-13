import React, { useState } from "react";
import ListItem from "./ListItem";
import styles from "./TaskList.module.css";

const TasksList = ({ tasks, setTasks, removeTask, doneTask, editTask }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <div className={styles.task} key={task.id}>
            <ListItem
              doneTask={doneTask}
              setTasks={setTasks}
              editTask={editTask}
              tasks={tasks}
              task={task}
              removeTask={removeTask}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
