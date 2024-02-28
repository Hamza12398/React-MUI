import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo({title, details}) {
  return (
    <>
    <Card
      className="card-container"
      sx={{
        minWidth: 275,
        background: "#468B97",
        color: "white",
        marginTop: 5,
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={8}>
            {title}
            {details}
          </Grid>

          {/* BUTTONS <<ICONS>> */}
          <Grid
            xs={4}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <IconButton
              className="iconButton"
              aria-label="delete"
              sx={{
                border: "solid #8bc34a 3px",
                background: "white",
                color: "#8bc34a",
                marginTop: 2,
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
