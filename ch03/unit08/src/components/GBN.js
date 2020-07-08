import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../util/theme';

const GBN = (props) => {
  return (
    <GBNContainer>
      <Center>
        <HomeButton>코인거래소</HomeButton>
        <AccountContainer>
          <AccountButton>로그인</AccountButton>
          <AccountButton>회원가입</AccountButton>
        </AccountContainer>
      </Center>
    </GBNContainer>
  );
};

const GBNContainer = styled.div`
  width: 100%;
  ${flexCenter};
  background-color: ${(props) => props.theme.lightGray};
  border: 1px solid ${(props) => props.theme.middleGray};
`;
const Center = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;
const HomeButton = styled.span`
  padding: 20px 0;
  font-size: 25px;
  font-weight: 900;
  color: ${(props) => props.theme.point};
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
    transition: 0.2s all;
    color: ${(props) => props.theme.black};
  }
`;
const AccountContainer = styled.div`
  display: flex;
  padding: 20px 0;
  color: ${(props) => props.theme.black};
`;
const AccountButton = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  &:last-child {
    padding-left: 20px;
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.point};
  }
`;

export default GBN;
