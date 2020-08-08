import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../Text";
import withHoc from "../withHoc";
import Input from "../Input";

const TextWithHoc = withHoc(Text);
const InputWithHoc = withHoc(Input);

storiesOf("WithHoc", module)
  .addWithJSX("basic", () => (
    <div>
      <InputWithHoc />
      <TextWithHoc>Hello</TextWithHoc>
    </div>
  ))
  .addWithJSX("large", () => (
    <div>
      <InputWithHoc />
      <TextWithHoc large>Hello</TextWithHoc>
    </div>
  ));
