import React from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useTodo } from "../context/todoContext";

const AddForm = () => {
  const { addNewTask, taskValue, setTaskValue, setCurrentTask } = useTodo();

  const handleAdd = (e) => {
    e.preventDefault();

    addNewTask({
      id: Math.random(),
      task: taskValue,
      editTask: false,
    });
  };

  return (
    <Container style={{ marginBottom: "2rem" }}>
      <Box onSubmit={handleAdd} component="form">
        <Grid container spacing={2}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <TextField
              style={{ width: "100%" }}
              id="task-input"
              label="Task..."
              variant="standard"
              name="Task"
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{ height: "100%", padding: "0 2.5rem" }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddForm;
