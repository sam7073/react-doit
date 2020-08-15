import React, { PureComponent } from "react";
import Heading from "../../UI/Heading";
import InlineList from "../../UI/InlineList";
import CoinDashlet from "./CoinDashlet";

export default class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="비트코인" priceLabel="4,216,000원" />
          <CoinDashlet name="이더리움" priceLabel="216,000원" />
          <CoinDashlet name="훈래코인" priceLabel="30,000원" />
        </InlineList>
      </React.Fragment>
    );
  }
}
