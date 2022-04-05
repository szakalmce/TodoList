import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Typography,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import AddForm from "./components/AddForm";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            TODO LIST 2022
          </Typography>
        </Grid>
      </Grid>

      <AddForm />

      <TasksList />
    </>
  );
};

export default App;
