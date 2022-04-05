import { useContext, createContext, useState } from "react";

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const value = {
    addNewTask,
    taskValue,
    setTaskValue,
    tasks,
    setTasks,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
