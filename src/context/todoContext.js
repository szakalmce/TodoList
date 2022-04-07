import { useContext, createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskValue, setTaskValue] = useState("");
  const [currentTask, setCurrentTask] = useState("");
  const [edit, setEdit] = useState(false);

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setTaskValue("");
  };

  const deleteTask = (id) => {
    const newList = tasks.filter((item) => item.id !== id);

    setTasks(newList);
  };

  const editTask = (id) => {
    const findItem = tasks.find((item) => item.id === id);

    tasks.forEach((item) => {
      if (item.id === id) {
        item.editTask = !item.editTask;

        setEdit(!edit);
      } else {
        item.editTask = false;
      }
      return item;
    });

    console.log(id);
  };

  window.localStorage.setItem("tasks", JSON.stringify(tasks));

  const value = {
    addNewTask,
    taskValue,
    setTaskValue,
    tasks,
    setTasks,
    deleteTask,
    edit,
    setEdit,
    editTask,
    currentTask,
    setCurrentTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
