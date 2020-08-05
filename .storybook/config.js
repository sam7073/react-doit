import { configure, setAddon } from "@storybook/react";
import interopRequireDefault from "babel-runtime/helpers/interop-require-default";
import JSXAddon from "storybook-addon-jsx";

function loadStories() {
  const context = require.context("../src/story", true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
