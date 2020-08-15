import React, { PureComponent } from "react";
import AppLayout from "./components/AppLayout";
import MainPage from "./components/main/MainPage";

export default class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <MainPage />
      </AppLayout>
    );
  }
}
