import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import { setLoading, resetLoading } from "./actions/loadingActions";
import { setUser, resetUser } from "./actions/userAction";
import { setCollection, setAge } from "./actions/collectionActions";

import PresentationComponent from "./PresentationComponent";
import ContainerComponent from "./ContainerComponent";
import DispatchContainer from "./DispatchComponent";

class ReduxApp extends PureComponent {
  store = configureStore({ loading: false });
  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(setUser({ name: "Hoon", age: 23 }));
    this.store.dispatch(resetUser({ name: "", age: 0 }));
    this.store.dispatch(
      setCollection([
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Park", age: 35 },
        { id: 3, name: "Hoon", age: 23 },
      ])
    );
    this.store.dispatch(setAge(2, 20));
  }
  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
        <br />
        액션 데이터 컴포넌트: <DispatchContainer />
      </Provider>
    );
  }
}
export default ReduxApp;
