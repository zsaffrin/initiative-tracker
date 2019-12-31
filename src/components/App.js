import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBan,
  faCog,
  faDiceD20,
  faEdit,
  faHeart,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faTrashAlt,
  faWrench,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import ReactGA from 'react-ga';


import { defaultTheme } from '../themes';
import GlobalStyle from './GlobalStyle';
import Content from './Content';

library.add(
  faBan,
  faCog,
  faDiceD20,
  faEdit,
  faGithub,
  faHeart,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faTrashAlt,
  faWrench,
  faUndo,
);

// ReactGA.initialize('UA-155048894-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

const AppLayout = styled.div`
  display: grid;
  min-height: 100vh;
`;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Router>
      <AppLayout>
        <Content />
      </AppLayout>
    </Router>
  </ThemeProvider>
);

export default App;
