import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useContext } from "react";
import { useState } from "react";
import { TodosContext } from "../Contexts/TodosContext";

export default function Todo({ todo }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { todos, setTodos } = useContext(TodosContext);

  // * FUNCTIONS ********************************
  function handleCheckClick() {
    const updateTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodos(updateTodos);
  }
  function handleDeleteClick() {
    // alert("Are you sure you want to delete");
    setShowDeleteDialog(true);
  }
  function handleClose() {
    setShowDeleteDialog(false);
  }
  function handleDelete() {
    const updateTodos = todos.filter((t) => t.id!== todo.id);
    // console.log(typeof updateTodos);
    setTodos(updateTodos);
  }

  // * END FUNCTIONS ********************************

  // let open = true;
  return (
    <>
      <Dialog
        // fullScreen={fullScreen}
        open={showDeleteDialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Card
        className="card-container"
        sx={{
          minWidth: 275,
          background: "#468B97",
          color: "white",
          marginTop: 4,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Typography variant="h4" sx={{ color: "#092635" }}>
                {todo.title}
              </Typography>
              <Typography variant="h5">{todo.details}</Typography>
            </Grid>

            {/* BUTTONS <<ICONS>> */}
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="delete"
                sx={{
                  border: "solid #8bc34a 3px",
                  background: todo.isCompleted ? "#8bc34a" : "#ffff",
                  color: todo.isCompleted ? "#ffff" : "#8bc34a",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                className="iconButton"
                aria-label="delete"
                sx={{
                  border: "solid #387ADF 3px",
                  background: "white",
                  color: "#387ADF",
                  marginTop: 2,
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={handleDeleteClick}
                className="iconButton"
                aria-label="delete"
                sx={{
                  border: "solid #B80000 3px",
                  background: "white",
                  color: "#B80000",
                  marginTop: 2,
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            {/*-------- BUTTONS <<ICONS>> -------- */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
