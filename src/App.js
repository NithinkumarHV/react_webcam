import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import Image from "./components/Image";
import WebcamCapture from "./components/imageHooks";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Image} /> */}
            <Route exact path="/" component={WebcamCapture} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
