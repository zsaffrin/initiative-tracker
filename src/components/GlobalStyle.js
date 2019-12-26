import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => {
  const { app } = theme;
  return `
    html { box-sizing: border-box; }
    *, *:before, *:after { box-sizing: inherit; }

    body {
      background: ${app.background};
      color: ${app.color};
    }
  `;
});

export default GlobalStyle;
