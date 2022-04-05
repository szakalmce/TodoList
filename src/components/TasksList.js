import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useTodo } from "../context/todoContext";

const TasksList = () => {
  const { tasks } = useTodo();

  console.log(tasks);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <List>
            {tasks.map((item, index) => {
              return (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Checkbox edge="start" disableRipple />
                    </ListItemIcon>
                    <ListItemText>{item.task}</ListItemText>
                  </ListItemButton>
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
