import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { auth } from "./services/firebase";

//HOCs
import PrivateRoute from "./HOC/PrivateRoute";
import PublicToute from "./HOC/PublicRoute";

class App extends Component {
  render() {
    return this.state.loading === true ? (
      <h2>Loading...</h2>
    ) : (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/chat"
            authenticated={this.state.authenticated}
            component={Chat}
          />
          <PublicToute
            path="/signup"
            authenticated={this.state.authenticated}
            component={Signup}
          />
          <PublicToute
            path="/login"
            authenticated={this.state.authenticated}
            component={Login}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
