import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Heading from "../../UI/Heading";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import InlineLIst from "../../UI/InlineList";
import Text from "../../UI/Text";
import { Consumer as Modal } from "../../UI/Modal/context";
import { TRADE_COIN_MODAL } from "../../UI/Modal/modal";

class CoinDashlet extends PureComponent {
  render() {
    const { name, priceLabel } = this.props;
    return (
      <Modal>
        {({ openModal }) => (
          <Card vertical={4} horizontal={4}>
            <Heading level={4}>
              {name}
              <Text>{priceLabel}</Text>
            </Heading>
            <InlineLIst spacingBetween={1}>
              <Button
                primary
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, {
                    type: "buy",
                    name,
                    price: priceLabel,
                  })
                }
              >
                매도
              </Button>
              <Button
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, {
                    type: "sell",
                    name,
                    price: priceLabel,
                  })
                }
              >
                매수
              </Button>
            </InlineLIst>
          </Card>
        )}
      </Modal>
    );
  }
}

CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};

export default CoinDashlet;
