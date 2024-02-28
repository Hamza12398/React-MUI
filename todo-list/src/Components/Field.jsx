import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export default function Field() {
  return (
    <>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid xs={8}>
          <TextField
            id="outlined-basic"
            label="Title Of ToDo"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid
          xs={4}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button
            sx={{ width: "100%", height: "100%" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
