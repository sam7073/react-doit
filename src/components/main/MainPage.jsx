import React, { PureComponent } from "react";
import CoinOverview from "./CoinOverview";
import TransactionList from "./TransactionList";

export default class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionList />
      </React.Fragment>
    );
  }
}
