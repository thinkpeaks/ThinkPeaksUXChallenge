import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {Alert} from "@mui/material";

export default function SimpleSnackbar () {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        LOG IT !
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small"/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}
              variant="contained"
              sx={{mt: 3, ml: 1}}
      >Place order</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message=""
        action={action}
        severity="error"
        role={"alert"}
        sx={{color: "secondary"}}
        anchorOrigin={{vertical: "bottom", horizontal: "right"}}
        ContentProps={{role: "alert", severity: "error"}}
      >
        <Alert onClose={handleClose} severity="error" sx={{width: "100%"}}>
          Ooops :/ Something went wrong!!! Please contact us. <strong>Err-15</strong>
          <Button color="secondary" onClick={handleClose}>
            LOG IT !
          </Button>

        </Alert>

      </Snackbar>
    </div>
  );
}
