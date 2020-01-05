import React from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';
import { Redirect, useParams } from 'react-router-dom';

import { ListProvider } from '../../../contexts';
import Header from '../../Header';
import Footer from '../../Footer';
import ViewSession from './ViewSession';
import EditSession from './EditSession';
import ShareSession from './ShareSession';

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const PageContent = styled.div(({ theme }) => {
  const { color, space } = theme;
  return `
    background: ${color.white};
    padding: ${space.lg} ${space.md};
    display: grid;
  `;
});

const Session = ({ list }) => {
  const { mode, sharekey } = useParams();

  let pageContent = <ViewSession />;
  if (mode) {
    if (mode === 'edit') {
      pageContent = <EditSession />;
    } else if (mode === 'share') {
      pageContent = <ShareSession />;
    } else {
      return <Redirect to={`/session/${sharekey}`} />;
    }
  }

  return (
    <PageLayout>
      <ListProvider list={list}>
        <Header />
        <PageContent>
          {pageContent}
        </PageContent>
        <Footer />
      </ListProvider>
    </PageLayout>
  );
};
Session.propTypes = {
  list: shape({}).isRequired,
};

export default Session;
