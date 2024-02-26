import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function Todo() {
  return (
    <Card sx={{ minWidth: 275, background:"#38A3A5" }}>
      <CardContent>
        <Typography variant="h2">First TODO</Typography>
      </CardContent>
      <CheckCircleIcon />
    </Card>
  );
}
