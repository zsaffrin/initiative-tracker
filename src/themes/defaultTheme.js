const space = {
  thin: '2px',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
};
const color = {
  white: '#fff',
  gray: '#bac6ca',
  lightgray: '#ebeeef',
  darkgray: '#aab5b9',

  // Brand colors
  primary: '#001f3f',
  accent: '#7FDBFF',
};

const app = {
  background: '#f8fafa',
  color: '#3c4041',
};
const header = {
  background: color.primary,
  color: color.accent,
};
const inputs = {
  borderColor: color.primary,
  buttonColorDanger: '#BE1525',
  buttonColorDefault: color.gray,
  buttonColorDisabled: color.gray,
  buttonTextColorLight: color.white,
  buttonTextColorDark: color.black,
  buttonTextColorDisabled: color.white,
};
const tracker = {
  currentTurnItemBg: color.accent,
  currentTurnItemColor: color.primary,
};
const footer = {
  footerBg: color.primary,
  footerColor: color.gray,
};

const defaultTheme = {
  space,
  color,
  app,
  header,
  inputs,
  tracker,
  footer,
};

export default defaultTheme;
