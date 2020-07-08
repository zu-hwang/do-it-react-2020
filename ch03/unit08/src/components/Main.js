import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../util/theme';
import CoinInfoBox from '../components/CoinInfoBox';
import TransactionStatus from '../components/TransactionStatus';

const Main = () => {
  return (
    <Container>
      <Center>
        <CoinInfoBox></CoinInfoBox>
        <TransactionStatus></TransactionStatus>
      </Center>
    </Container>
  );
};
const Container = styled.div`
  ${flexCenter}
  width: 1000px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

export default Main;
