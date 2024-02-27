import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
export default function Todo() {
  return (
    <Card
      sx={{
        minWidth: 275,
        background: "#38A3A5",
        color: "white",
        marginTop: 2,
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Typography  variant="h5">First TODO</Typography>
          </Grid>

          {/* BUTTONS */}
          <Grid
            xs={4}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <IconButton
              aria-label="delete"
              sx={{
                border: "solid #8bc34a 3px",
                background: "white",
                color: "#8bc34a",
              }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              sx={{
                border: "solid #8bc34a 3px",
                background: "white",
                color: "#8bc34a",
              }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              sx={{
                border: "solid #8bc34a 3px",
                background: "white",
                color: "#8bc34a",
              }}
            >
              <CheckIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
