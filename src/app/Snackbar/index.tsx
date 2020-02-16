import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5)
    }
  })
);

export default ({ open, handleClose, message }: Props) => {
  const classes = useStyles();
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      ContentProps={{ "aria-describedby": "message-id" }}
      message={<span id="message-id">{message}</span>}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

interface Props {
  open: boolean;
  handleClose: () => void;
  message?: string;
}
