import React, { Component } from "react";
import { connect } from "react-redux";

class UserSelector extends Component {
  render() {
    return <div>UserSelector</div>;
  }
}

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(UserSelector);
