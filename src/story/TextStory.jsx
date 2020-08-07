import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../Text";

storiesOf("Text", module)
  .addWithJSX("기본 설정", () => <Text>Hello</Text>)
  .addWithJSX("large 예제", () => <Text large>Hello</Text>)
  .addWithJSX("xlarge 예제", () => <Text xlarge>Hello</Text>)
  .addWithJSX("small 예제", () => <Text small>Hello</Text>)
  .addWithJSX("xsmall 예제", () => <Text xsmall>Hello</Text>)
  .addWithJSX("primary 예제", () => <Text primary>Hello</Text>)
  .addWithJSX("secondary 예제", () => <Text secondary>Hello</Text>);
