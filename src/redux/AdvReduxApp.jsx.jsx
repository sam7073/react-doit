import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { setLoading, resetLoading } from "./actions/loadingActions";
import { setUser } from "./actions/userAction";
class ReduxApp extends PureComponent {
  store = configureStore({ loading: false });
  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(setUser({ name: "Hoon", age: 23 }));
  }
  render() {
    return <Provider store={this.store}>Redux Example</Provider>;
  }
}
export default ReduxApp;
