import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const StyledSection = styled.div(({ theme }) => {
  const { space } = theme;
  return `
    display: grid;
    grid-gap: ${space.xl};
    grid-template-rows: auto auto 1fr;
    align-items: start;
    justify-items: center;
    padding: ${space.md};

    & > div {
      padding: ${space.lg} 0;
    }
  `;
});
const Centered = styled.div`
  text-align: center;
`;

const SharingKey = ({ shareKey, type }) => {
  let description;
  if (type === 'view') {
    description = (
      <>
        <Centered>Share this key with others so they can follow the session</Centered>
      </>
    );
  }
  if (type === 'edit') {
    description = (
      <>
        <Centered>This key gives full edit access to the session</Centered>
      </>
    );
  }

  return (
    <StyledSection>
      <div>
        {description}
      </div>
      <div>
        {shareKey}
      </div>
      <div>
        <QRCode
          value={`${process.env.REACT_APP_BASE_URL}/session/${shareKey}`}
          renderAs="svg"
        />
      </div>
    </StyledSection>
  );
};
SharingKey.propTypes = {
  shareKey: string,
  type: string,
};
SharingKey.defaultProps = {
  shareKey: '',
  type: '',
};

export default SharingKey;
