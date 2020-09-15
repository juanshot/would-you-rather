import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
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
});

class UserSelector extends Component {
  state = {
    currentUser: "",
    redirect: false,
  };
  handleCurrentUserChange = (e) => {
    const { value } = e.target;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(value));
    this.setState((state) => ({
      ...state,
      redirect: true,
    }));
  };
  render() {
    const { classes } = this.props;
    const { users } = this.props;
    const { authedUser } = this.props;
    return this.state.redirect ? (
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
              onChange={this.handleCurrentUserChange}
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
        </Paper>
      </div>
    );
  }
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
