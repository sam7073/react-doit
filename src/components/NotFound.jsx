import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Text from "../UI/Text";
import Spacing from "../UI/Spacing";

export default class NotFound extends PureComponent {
  render() {
    const { url } = this.props.match || {};
    return (
      <React.Fragment>
        <Spacing bottom={2}>
          <Text xlarge>{url} 페이지를 찾을 수 없습니다.</Text>
        </Spacing>
        <Link to="/">메인 페이지로 이동</Link>
      </React.Fragment>
    );
  }
}