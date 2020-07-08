import React from 'react';
import styled from 'styled-components';

const ResultListBox = () => {
  const resultData = [
    {
      id: 1,
      title: '비트코인',
      nowPrice: 4216000,
      price: 4216000,
      dateTime: '2019-11 T04:34:50+00:00',
    },
    {
      id: 2,
      title: '이더리움',
      nowPrice: 216000,
      price: 216000,
      dateTime: '2019-11 T04:34:50+00:00',
    },
    {
      id: 3,
      title: '주주코인',
      nowPrice: 382400,
      price: 382400,
      dateTime: '2019-11 T04:34:50+00:00',
    },
    {
      id: 4,
      title: '미미코인',
      nowPrice: 98829,
      price: 98829,
      dateTime: '2019-11 T04:34:50+00:00',
    },
  ];
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
          {resultData.map((li) => {
            return (
              <Row key={`${li.id}-search-result`}>
                <td>{li.title}</td>
                <td>{li.price.toLocaleString()}</td>
                <td>{li.nowPrice.toLocaleString()}</td>
                <td>{li.dateTime}</td>
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
    text-align: center;
    &:nth-child(2),
    &:nth-child(3) {
      text-align: right;
      &::after {
        content: ' 원';
      }
    }
  }
`;
export default ResultListBox;
