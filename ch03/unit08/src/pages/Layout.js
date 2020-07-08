import React from 'react';
import styled from 'styled-components';
import { mainFont } from '../util/theme';
import GBN from '../components/GBN';
import Notipication from '../components/Notipication';
import Modal from '../components/Modal';

const Layout = ({ children }) => {
  return (
    <>
      <Modal></Modal>
      <Container>
        <GBN />
        {children}
        <Notipication />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.lightGray};
  height: 100vh;
  ${mainFont};
`;

export default Layout;
