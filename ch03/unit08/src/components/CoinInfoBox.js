import React from 'react';
import styled from 'styled-components';
import CoinBox from './CoinBox';

const CoinInfoBox = ({ ids, entites }) => {
  return (
    <Container>
      <H2>코인동향</H2>
      <InnerContainer>
        {ids &&
          ids
            .filter((id, idx) => idx < 4)
            .map((id) => {
              const { name, currentPrice } = entites[id];
              return (
                <CoinBox
                  key={`${id}-coin-box`}
                  id={id}
                  name={name}
                  currentPrice={currentPrice}
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
