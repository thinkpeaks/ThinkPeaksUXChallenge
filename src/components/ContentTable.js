import Paper from "@mui/material/Paper";
import Orders from "./Orders";

export default function SomeTable () {
  return (
    <Paper sx={{p: 2, display: "flex", flexDirection: "column"}}>
      <Orders/>
    </Paper>);
}

