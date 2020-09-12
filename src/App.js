import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import routes from "./routes";
import "./App.css";
import { handleInitialData } from "./store/actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <div className="main">
            {/* Router */}
            <Switch>
              {routes.map((route, key) => (
                <Route
                  exact={route.exact}
                  key={key}
                  path={route.path}
                  component={route.component}
                ></Route>
              ))}
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  authedUser: state.authedUser
});
export default connect(mapStateToProps)(App);
