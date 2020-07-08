import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ResultListBox = ({ ids, entites }) => {
  return (
    <Container>
      <table>
        <TableHeader>
          <tr>
            <TH>코인</TH>
            <TH>시가 총액</TH>
            <TH>현재 시세</TH>
            <TH>거래 시간</TH>
          </tr>
        </TableHeader>
        <TableBody>
          {ids === []
            ? null
            : ids.map((id) => {
                const {
                  name,
                  currentPrice,
                  totalPrice,
                  datetime,
                  code,
                } = entites[id];
                return (
                  <Row key={`${id}-search-result`}>
                    <td>
                      {name} ({code})
                    </td>
                    <td>{(totalPrice * 1000000).toLocaleString()}</td>
                    <td>{currentPrice.toLocaleString()}</td>
                    <td>{datetime}</td>
                  </Row>
                );
              })}
        </TableBody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.middleGray};
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 100px;
`;

const TableHeader = styled.thead`
  background-color: ${(props) => props.theme.point};
  color: ${(props) => props.theme.white};
`;
const TH = styled.th`
  padding: 15px 0;
  border-right: 1px solid white;
  &:last-child {
    border-right: none;
  }
`;

const TableBody = styled.tbody`
  width: 100%;
  background-color: ${(props) => props.theme.white};
`;
const Row = styled.tr`
  padding: 15px 0;
  border-bottom: 1px solid ${(props) => props.theme.middleGray};
  &:last-child {
    border-bottom: none;
  }
  &:nth-child(even) {
    background-color: ${(props) => props.theme.lightGray};
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.neutral};
  }

  td {
    padding: 15px;
    &:first-child {
      padding-left: 30px;
    }
    &:nth-child(2),
    &:nth-child(3) {
      text-align: right;
      &::after {
        content: ' 원';
      }
    }
    &:last-child {
      text-align: center;
    }
  }
`;

const mapStateToPtops = (state, props) => {
  const { ids, entites } = state;
  return {
    ids,
    entites,
  };
};

export default connect(mapStateToPtops)(ResultListBox);
