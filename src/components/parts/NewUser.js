import React from "react";
import { makeStyles, Paper, TextField } from "@material-ui/core";
import PageTitle from "./PageTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

const NewUser = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <PageTitle title="New User" />
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField id="user-username" label="Username" />
        <TextField id="user-name" label="Name" />
        <TextField id="user-avatar-url" label="Avatar URL" />
      </form>
    </Paper>
  );
};

export default NewUser;
