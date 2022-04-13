import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem("tasks"))
  );

  console.log(tasks);

  const addTask = (props) => {
    setTasks([...tasks, props]);
  };

  const removeTask = (id) => {
    let conf = window.confirm("are you sure?");

    if (conf) {
      const newList = tasks.filter((task) => task.id !== id);
      setTasks(newList);
    }
  };

  const doneTask = (id) => {
    const newList = tasks.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTasks(newList);
  };

  const editTask = (id, newTaskValue, setNewTaskValue) => {
    const newList = tasks.map((item) => {
      if (item.id === id) {
        item.isEdit = !item.isEdit;
        if (item.isEdit) {
          setNewTaskValue(item.task);
        } else {
          item.task = newTaskValue;
        }
      } else {
        item.isEdit = false;
      }
      return item;
    });

    setTasks(newList);
  };

  // save localstorage
  window.localStorage.setItem("tasks", JSON.stringify(tasks));

  return (
    <div className="container">
      <Header tasks={tasks} />
      <AddTaskForm addTask={addTask} />
      <TasksList
        doneTask={doneTask}
        removeTask={removeTask}
        editTask={editTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
