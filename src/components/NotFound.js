import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "80px",
  },
  rootGrid: {
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleRedirect = (props) => {
    history.push("/dashboard");
  };
  return (
    <div className={classes.wrapper}>
      <IconButton
        aria-label="delete"
        className={classes.margin}
        size="small"
        onClick={handleRedirect}
      >
        <ArrowBack fontSize="large" />
      </IconButton>
      <Grid className={classes.rootGrid} container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <CloseIcon fontSize="large"></CloseIcon>
            <Typography>404 PAGE NOT FOUND</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
