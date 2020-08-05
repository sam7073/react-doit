import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "../Counter";

storiesOf("Counter", module).add("기본 설정", () => <Counter num="5" />);
