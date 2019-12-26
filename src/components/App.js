import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBan,
  faCog,
  faDiceD20,
  faEdit,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faTrashAlt,
  faWrench,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';


import { defaultTheme } from '../themes';
import { PageProvider, ParticipantProvider, TurnProvider } from '../contexts';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Router from './Router';

library.add(
  faBan,
  faCog,
  faDiceD20,
  faEdit,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faTrashAlt,
  faWrench,
  faUndo,
);

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 1vh;
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
        </TurnProvider>
      </ParticipantProvider>
    </PageProvider>
  </ThemeProvider>
);

export default App;
