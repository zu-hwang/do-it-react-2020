import React from 'react';
import styled from 'styled-components';
import { flexCenter, mainFont, depth3 } from '../util/theme';
import LabelInput from './LabelInput';
import BasicBtn from '../components/BasicBtn';

const Modal = (props) => {
  const { title, mode, price, quantity, onChangeQuantity } = props;
  return (
    <FullScreen>
      <Container>
        <H1>
          {title || '비트코인'} {mode || '구매'}
        </H1>
        <Box>
          <LabelInput
            name={'금액'}
            id={'modal-price-input'}
            type='text'
            value={price || (1245567).toLocaleString()}
            readOnly={true}
          />
          <LabelInput
            name={'수량'}
            id={'modal-quantity-input'}
            type='text'
            value={quantity || 1}
            onChange={onChangeQuantity}
          />
        </Box>
        <ButtonBox>
          <BasicBtn name='구매' color='point' onClick={null} />
          <BasicBtn name='취소' onClick={null} />
        </ButtonBox>
      </Container>
    </FullScreen>
  );
};

const FullScreen = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${depth3}
  ${mainFont}
  ${flexCenter}
  background-color: rgba(0, 0, 0, .5);
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 50px;
  width: 550px;
  height: 300px;
  border-radius: 10px;
  ${depth3}
`;
const Box = styled.div`
  padding: 30px;
  ${flexCenter}
`;

const H1 = styled.h1`
  padding: 20px 0;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.point};
  margin-bottom: 50px;
  color: ${(props) => props.theme.point};
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: end;
  margin-top: 20px;
`;
export default Modal;
