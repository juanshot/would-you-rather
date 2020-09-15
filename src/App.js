import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import GuardedRoute from "./components/hoc/GuardedRoute";
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
              {routes.map((route, key) => {
                // Adding authentication validation on routes
                return route.notGuarded ? (
                  <Route
                    exact={route.exact}
                    key={key}
                    path={route.path}
                    component={route.component}
                  ></Route>
                ) : (
                  <GuardedRoute
                    exact={route.exact}
                    key={key}
                    path={route.path}
                    component={route.component}
                    authenticated={!!this.props.authedUser}
                  ></GuardedRoute>
                );
              })}
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});
export default connect(mapStateToProps)(App);
