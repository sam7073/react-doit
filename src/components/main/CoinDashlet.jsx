import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import InlineLIst from "../../UI/InlineList";
import Text from "../../UI/Text";

class CoinDashlet extends PureComponent {
  render() {
    const { name, priceLabel } = this.props;
    return (
      <Card vertical={4} horizontal={4}>
        <Heading level={4}>
          {name}
          <Text>{priceLabel}</Text>
        </Heading>
        <InlineLIst spacingBetween={1}>
          <Button primary small>
            매도
          </Button>
          <Button small>매수</Button>
        </InlineLIst>
      </Card>
    );
  }
}

CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};

export default CoinDashlet;
