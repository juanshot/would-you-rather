import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import {
  Avatar,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";

import RegistrationDialog from "./RegistrationDialog";
import { setAuthedUser } from "../store/actions/authedUser";

const styles = (theme) => ({
  userSelectorWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  paper: {
    padding: 20,
    width: 400,
    backgroundColor: "#cccccc0f",
    color: "white",
  },
  formControl: {
    width: "100%",
  },
  signUpButton: {
    marginTop: "15px",
  },
});

const UserSelector = (props) => {
  const [newUserOpen, setNewUserOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("/dashboard");
  const { authedUser, classes, users } = props;

  const handleCurrentUserChange = (e) => {
    const { value } = e.target;
    const { location, dispatch } = props;
    dispatch(setAuthedUser(value));
    const { state } = location;
    if (state && state.from) {
      setRedirectUrl(state.from);
    }
    setRedirect(true);
  };
  const handleDialogOpen = (value) => {
    setNewUserOpen(value);
  };
  return redirect ? (
    <Redirect to={redirectUrl} />
  ) : (
    <div className={classes.userSelectorWrapper}>
      <Paper className={classes.paper}>
        <FormControl className={classes.formControl}>
          <InputLabel id="select-current-user-label">Select User</InputLabel>
          <Select
            id="user-selector"
            labelId="select-current-user-label"
            value={authedUser || ""}
            onChange={handleCurrentUserChange}
          >
            {users.map((user, key) => (
              <MenuItem key={key} value={user.id}>
                <Chip
                  avatar={<Avatar alt={user.id} src={user.avatarURL} />}
                  label={user.name}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          color="primary"
          className={classes.signUpButton}
          onClick={() => handleDialogOpen(true)}
        >
          Sign up
        </Button>
      </Paper>
      {/* New User Dialog */}
      <RegistrationDialog isOpen={newUserOpen} onChange={handleDialogOpen} />
    </div>
  );
};
UserSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.keys(users).map((userKey) => ({
    ...users[userKey],
  })),
  authedUser,
});

export default connect(mapStateToProps)(withStyles(styles)(UserSelector));
