import React, { useState } from 'react';
import styled from 'styled-components';
import { flexCenter, mainFont, depth3 } from '../util/theme';
import LabelInput from './LabelInput';
import BasicBtn from '../components/BasicBtn';

const Modal = (props) => {
  const { name, mode, price } = props;
  const [quantityValue, setQuantityValue] = useState(1);
  const [quantityError, setQuantityError] = useState(false);
  const checkTitle = () => {
    if (mode === '') return 'loading...';
    if (mode === '구매') return name + ' 구매';
    if (mode === '판매') return name + ' 판매';
    if (mode === '로그인') return mode;
    if (mode === '회원가입') return mode;
  };
  const isTrade = () => {
    if (mode === '구매' || mode === '판매') return true;
    if (mode === '로그인' || mode === '회원가입') return false;
    if (mode === '') return false;
  };

  const onChange = (e) => {
    const value = Number(e.target.value);
    if (String(value) === 'NaN') {
      setQuantityError(true);
      return setQuantityValue(1);
    }
    if (typeof value === 'number') return setQuantityValue(value);
  };
  return (
    <FullScreen>
      ㅁ
      <Container>
        <H1>{checkTitle()}</H1>
        <Box>
          {isTrade() ? (
            <>
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
                value={quantityValue}
                onChange={onChange}
              />
            </>
          ) : (
            '???'
          )}
        </Box>
        <ButtonBox>
          <BasicBtn name={mode} color='point' onClick={null} />
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
