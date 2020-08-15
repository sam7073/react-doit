import React, { PureComponent } from "react";
import CoinOverview from "./CoinOverview";
import TransactionListContainer from "../../containers/main/TransactionListContainer";

export default class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionListContainer />
      </React.Fragment>
    );
  }
}
