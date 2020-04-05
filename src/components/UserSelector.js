import React, { Component } from "react";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { setAuthedUser } from "../store/actions/authedUser";

class UserSelector extends Component {
  state = {
    currentUser: "",
  };
  handleCurrentUserChange = (e) => {
    const { value } = e.target;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(value));
  };
  render() {
    const { users } = this.props;
    const { authedUser } = this.props;
    return (
      <FormControl>
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
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.keys(users).map((userKey) => ({
    ...users[userKey],
  })),
  authedUser,
});

export default connect(mapStateToProps)(UserSelector);
