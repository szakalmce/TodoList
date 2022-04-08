import React, { useEffect } from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import SaveIcon from "@mui/icons-material/Save";
import { useTodo } from "../context/todoContext";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    "& .MuiTypography-root": {
      fontSize: "2rem",
    },
  },
});

const TasksList = () => {
  const {
    tasks,
    deleteTask,
    setCurrentTask,
    currentTask,
    editTask,
    setDone,
    doneTask,
    done,
  } = useTodo();

  useEffect(() => {
    setDone(!done);
  }, []);

  const classes = useStyles();

  const handleRemove = (task) => {
    deleteTask(task.id);
  };

  const handleEdit = (task) => {
    editTask(task.id);
  };

  const handleDone = (task) => {
    tasks.forEach((item) => {
      if (item.id === task.id) {
        item.done = !item.done;
        setDone(!done);
      }
      return item;
    });
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <List>
            {tasks.map((item) => {
              return (
                <ListItem className={classes.btn} key={item.id}>
                  <ListItemIcon>
                    <Checkbox
                      onClick={() => handleDone(item)}
                      onChange={(e) => setDone(e.target.checked)}
                      edge="start"
                      disableRipple
                    />
                  </ListItemIcon>
                  {item.editTask ? (
                    <>
                      <TextField
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        value={currentTask}
                        onChange={(e) => setCurrentTask(e.target.value)}
                      />
                      <SaveIcon
                        onClick={() => {
                          handleEdit(item);
                          setCurrentTask(item.task);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </>
                  ) : (
                    <>
                      <ListItemText
                        style={{
                          textDecoration:
                            item.done && done ? "line-through" : null,
                        }}
                        primary={item.task}
                      />
                      <ListItemIcon>
                        <ModeEditOutlineIcon
                          onClick={() => {
                            handleEdit(item);
                            setCurrentTask(item.task); // ten powinen mieć inną funkcje
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </ListItemIcon>
                    </>
                  )}
                  <ListItemIcon>
                    <DeleteIcon
                      onClick={() => handleRemove(item)}
                      style={{ cursor: "pointer" }}
                    />
                  </ListItemIcon>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
};

export default TasksList;
