import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { flexCenter, mainFont } from '../util/theme';
import CoinInfoBox from '../components/CoinInfoBox';
import TransactionStatus from '../components/TransactionStatus';
import { setTransactionList } from '../redux/actions';
import API from '../util/api';

const Main = ({ ids, entites, setTransactionList }) => {
  useEffect(() => {
    API.get('/transactions')
      .then(({ data }) => {
        // console.log(res.data);
        setTransactionList(data);
      })
      .catch((error) => console.log(error));
  }, [setTransactionList]);
  return (
    <Container>
      <Center>
        <CoinInfoBox ids={ids} entites={entites} />
        <TransactionStatus ids={ids} entites={entites} />
      </Center>
    </Container>
  );
};
const Container = styled.div`
  ${flexCenter}
  ${mainFont}
  width: 1000px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

const mapStateToProps = (state, props) => {
  console.log({ state });
  const { ids, entites } = state;
  return {
    ids,
    entites,
  };
};

export default connect(mapStateToProps, { setTransactionList })(Main);
