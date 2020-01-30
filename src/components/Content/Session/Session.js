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
  const { color } = theme;
  return `
    background: ${color.white};
  `;
});
const ContentWrap = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    padding: ${space.lg} ${space.md};
    margin: 0 auto;
    max-width: 32em;
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
          <ContentWrap>
            {pageContent}
          </ContentWrap>
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
