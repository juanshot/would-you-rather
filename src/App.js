import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { handleInitialData } from "./store/actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <div>app</div>;
  }
}
const mapStateToProps = state => ({
  authedUser: state.authedUser
});
export default connect(mapStateToProps)(App);
