import React from 'react';
import styled from 'styled-components';
import SearchContainer from './SearchContainer';
import ResultListBox from './ResultListBox';

const TransactionStatus = () => {
  return (
    <Container>
      <H2>거래 현황</H2>
      <InnerContainer>
        <SearchContainer></SearchContainer>
      </InnerContainer>
      <InnerContainer>
        <ResultListBox></ResultListBox>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  color: ${(props) => props.theme.black};
  /* border: 1px solid ${(props) => props.theme.middleGray}; */
`;
const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  &:last-child {
    padding-top: 10px;
  }
`;

export default TransactionStatus;
