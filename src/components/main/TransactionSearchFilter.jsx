import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import InlineLIst from "../../UI/InlineList";
import Button from "../../UI/Button";
import Text from "../../UI/Text";
import Input from "../../UI/Input";
import Form from "../../UI/Form";
import Select, { Option } from "../../UI/Select";
import Api from "../../Api";

class TransactionSearchFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    const { setTransactionList } = this.props;
    Api.get("/transactions", { params }).then(({ data }) =>
      setTransactionList(data)
    );
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineLIst spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select
                name="code"
                label="코인 코드"
                onChange={onChange}
                value={values["code"]}
              >
                <Option label="선택해주세요" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="훈래코인(HRC)" value="HRC" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소 거래가"
                onChange={onChange}
                value={values["currentPrice_gte"]}
              />
              <Input
                name="currentPrice_lte"
                label="최대 거래가"
                onChange={onChange}
                value={values["currentPrice_lte"]}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineLIst>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

TransactionSearchFilter.propTypes = { setTransactionList: PropTypes.func };

export default TransactionSearchFilter;
