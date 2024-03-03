import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useContext, useState, useEffect } from "react";
import { TodosContext } from "../Contexts/TodosContext";

export default function Todo({ todo }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showCreateDialoge, setShowCreateDialoge] = useState(false);
  const [updatedTodo, setUpdateTodo] = useState({
    title: todo.title,
    details: todo.details,
  });

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
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }

  function handleDeleteClick() {
    // alert("Are you sure you want to delete");
    setShowDeleteDialog(true);
    
  }
  function handleClose() {
    setShowDeleteDialog(false);
  }

  function handkeEditClick() {
    setShowCreateDialoge(true);
  }
  function handleCloseCreate() {
    setShowCreateDialoge(false);
  }

  function handleDelete() {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleEdit() {
    let updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: updatedTodo.title,
          details: updatedTodo.details,
        };
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    setShowCreateDialoge(false);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  // * END FUNCTIONS ********************************

  return (
    <>
      {/* DIALOG DELETE */}
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
            <span style={{ display: "block" }}>
              You gonna Delete This ToDo Of your List.
            </span>
            <span style={{ display: "block" }}>
              <b>Are you Sure About This?</b>
            </span>
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
      {/* END DIALOG DELETE */}

      {/* DIALOG EDIT */}
      <Dialog
        open={showCreateDialoge}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit Your ToDo List</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Edit Title"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(t) => {
              setUpdateTodo({ ...updatedTodo, title: t.target.value });
            }}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Edit Details"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(t) => {
              setUpdateTodo({ ...updatedTodo, details: t.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreate}>Cancel</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </DialogActions>
      </Dialog>

      {/* END DIALOG EDIT */}

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
                onClick={() => {
                  handkeEditClick();
                }}
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
