import React from 'react';
import styled from 'styled-components';
import CoinBox from './CoinBox';

const coinList = [
  { id: 1, title: '비트코인', price: 4216000, priceUnit: '원' },
  { id: 2, title: '이더리움', price: 216000, priceUnit: '원' },
  { id: 3, title: '주주코인', price: 382400, priceUnit: '원' },
  { id: 4, title: '미미코인', price: 98829, priceUnit: '원' },
  // { id: 2, title: '주주코인', price: 382400, PriceUnit: '원' },
  // { id: 2, title: '주주코인', price: 382400, PriceUnit: '원' },
  // { id: 2, title: '주주코인', price: 382400, PriceUnit: '원' },
  // { id: 2, title: '주주코인', price: 382400, PriceUnit: '원' },
];
const CoinInfoBox = () => {
  return (
    <Container>
      <H2>코인동향</H2>
      {/* 코인종류 컴포넌트 */}
      <InnerContainer>
        {coinList.map((li) => {
          return (
            <CoinBox
              key={`${li.id}-coin-box`}
              id={li.id}
              title={li.title}
              price={li.price}
              priceUnit={li.priceUnit}
            />
          );
        })}
      </InnerContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  /* border: 1px solid ${(props) => props.theme.middleGray}; */
`;
const H2 = styled.h2`
  color: ${(props) => props.theme.black};
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
`;

export default CoinInfoBox;
