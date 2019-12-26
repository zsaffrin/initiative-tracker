import React from 'react';
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
import ReactGA from 'react-ga';


import { defaultTheme } from '../themes';
import { PageProvider, ParticipantProvider, TurnProvider } from '../contexts';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Router from './Router';
import Footer from './Footer';

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

ReactGA.initialize('UA-155048894-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 97vh;
`;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <PageProvider>
      <ParticipantProvider>
        <TurnProvider>
          <GlobalStyle />
          <AppLayout>
            <Header />
            <Router />
          </AppLayout>
          <Footer />
        </TurnProvider>
      </ParticipantProvider>
    </PageProvider>
  </ThemeProvider>
);

export default App;
