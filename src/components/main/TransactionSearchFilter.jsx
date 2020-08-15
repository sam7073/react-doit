import React, { PureComponent } from "react";
import InlineLIst from "../../UI/InlineList";
import Button from "../../UI/Button";
import Text from "../../UI/Text";
import Input from "../../UI/Input";
import Form from "../../UI/Form";
import Select, { Option } from "../../UI/Select";

class TransactionSearchFilter extends PureComponent {
  render() {
    return (
      <Form onSubmit={(values) => console.log(values)}>
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
                <Option label="선택해주세요" value="none" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="훈래코인(HRC)" value="HRC" />
              </Select>
              <Input
                name="minAmount"
                label="최소 거래가"
                onChange={onChange}
                value={values["minAmount"]}
              />
              <Input
                name="maxAmount"
                label="최대 거래가"
                onChange={onChange}
                value={values["maxAmount"]}
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

TransactionSearchFilter.propTypes = {};

export default TransactionSearchFilter;
