import React from 'react';
import styled from 'styled-components';
import GBN from '../components/GBN';
import Notipication from '../components/Notipication';

const Layout = ({ children }) => {
  return (
    <Container>
      <GBN />
      {children}
      <Notipication />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Layout;
