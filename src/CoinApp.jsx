import React, { PureComponent } from "react";
import AppLayout from "./components/AppLayout";
import MainPage from "./components/main/MainPage";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import ModalProvider from "./UI/Modal/ModalProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <Router basename="/react-doit/">
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" component={NotFound} />
              </Switch>
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}
