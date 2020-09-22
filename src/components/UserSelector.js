import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Dialog from "@material-ui/core/Dialog";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";

import DialogTitle from './parts/DialogTitle';
import { setAuthedUser } from "../store/actions/authedUser";

const styles = (theme) => ({
  userSelectorWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  paper: {
    padding: 20,
    minWidth: 500,
    backgroundColor: "#cccccc0f",
    color: "white",
  },
  formControl: {
    width: "100%",
  },
  signUpButton: {
    marginTop: '15px',
  }
});

const UserSelector = (props) => {
  const [newUserOpen, setNewUserOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { classes } = props;
  const { users } = props;
  const { authedUser } = props;
  const handleCurrentUserChange = (e) => {
    const { value } = e.target;
    const { dispatch } = props;
    dispatch(setAuthedUser(value));
    setRedirect(true);
  };
  const handleDialogOpen = (value) => {
    setNewUserOpen(value)
  }
  return redirect ? (
    <Redirect to={"/dashboard"} />
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
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  <Chip
                    avatar={<Avatar alt={user.id} src={user.avatarURL} />}
                    label={user.name}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button color="primary" className={classes.signUpButton} onClick={() => handleDialogOpen(true)}>
            Sign up
          </Button>
        </Paper>
        {/* New User Dialog */}
        <Dialog
          onClose={() => handleDialogOpen(false)}
          aria-labelledby="simple-dialog-title"
          open={newUserOpen}
        >
          <DialogTitle onClose={() => handleDialogOpen(false)} />
          {/* New user Form */}
          skdjslkdjsldksjdslkdj
        </Dialog>
      </div>
    );
}
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
