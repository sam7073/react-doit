export const LARGE_AND_ABOVE = "largeAndAbove";

const BREAKPOINT_NAME = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

const breakpoints = {
  [BREAKPOINT_NAME.LARGE]: 1128,
  [BREAKPOINT_NAME.MEDIUM]: 744,
  [BREAKPOINT_NAME.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width:${
    breakpoints[BREAKPOINT_NAME.LARGE]
  }px)`,
  [BREAKPOINT_NAME.SMALL]: `@media(max-width:${
    breakpoints[BREAKPOINT_NAME.MEDIUM] - 1
  }px)`,
  print: "@media print",
};

export const unit = 4;

export default {
  color: {
    primary: "#03a9f4",
    sceondary: "#795548",
    white: "#FFFFFF",
    gray: "#CCCCCC",
    default: "#999999",
  },
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: "60px",
    lg: "54px",
    md: "36px",
    sm: "24px",
    sx: "18px",
  },
  depth: {
    level1: {
      boxShadow: "0, 2px, 2px, 0 rgba(0,0,0,0.14)",
    },
    level2: {
      boxShadow: "0 4px 5px 0 rgba(0,0,0,0.14)",
    },
    level3: {
      boxShadow: " 0 8px 17px 12px rgba(0,0,0,0.14)",
    },
  },
  unit,
  responsive,
};
