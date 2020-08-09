import React from "react";
import { storiesOf } from "@storybook/react";
import ReduxApp from "../redux/ReduxApp01";

storiesOf("Redux", module).addWithJSX("기본 설정", () => (
  <ReduxApp>Hello</ReduxApp>
));
