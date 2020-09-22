import React, { useRef } from "react";
import PropTypes from "prop-types";
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

const NewUser = (props) => {
  const classes = useStyles();
  const name = useRef(null);
  const userName = useRef(null);
  const avatarURL = useRef(null);

  const handleChange = () => {
    const [nameValue, userNameValue, avatarURLValue] = [
      name,
      userName,
      avatarURL,
    ].map((ref) => ref.current.value);
    props.onChange({
      userNameValue,
      nameValue,
      avatarURLValue,
    });
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <PageTitle title="New User" />
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          id="user-username"
          label="Username"
          inputRef={userName}
          onChange={handleChange}
        />
        <TextField
          id="user-name"
          label="Name"
          inputRef={name}
          onChange={handleChange}
        />
        <TextField
          id="user-avatar-url"
          label="Avatar URL"
          inputRef={avatarURL}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
};

NewUser.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NewUser;
