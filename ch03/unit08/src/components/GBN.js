import React from 'react';
import styled from 'styled-components';
import { flexCenter, mainFont } from '../util/theme';

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
  ${mainFont};
  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.middleGray};
`;
const Center = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;
const HomeButton = styled.h1`
  padding: 20px 0;
  font-size: 25px;
  font-weight: 400;
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
  padding: 15px 0;
  color: ${(props) => props.theme.black};
`;
const AccountButton = styled.span`
  ${flexCenter}
  /* font-weight: 400; */
  font-size: 14px;
  border-bottom: 2px solid ${(props) => props.theme.white};
  &:last-child {
    margin-left: 20px;
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.point};
    border-bottom: 1px solid ${(props) => props.theme.point};
  }
`;

export default GBN;
