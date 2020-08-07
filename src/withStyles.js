import ThemdStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aprhoditeInterface from "react-with-styles-interface-aphrodite";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import Theme from "./Theme";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";

ThemedStyleSheet.registerTheme(Theme);
ThemedStyleSheet.registerInterface(aprhoditeInterface);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;
