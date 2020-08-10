import React from "react";
import { storiesOf } from "@storybook/react";
import ReduxApp from "../redux/AdvReduxApp.jsx";

storiesOf("Redux", module).addWithJSX("redux1", () => (
  <ReduxApp>Hello</ReduxApp>
));
