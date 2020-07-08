import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BasicBtn from './BasicBtn';
import { flexCenter } from '../util/theme';

const SearchContainer = ({ ids, entites }) => {
  const [selectMenu, setSelectMenu] = useState(false);
  const [selectInputValue, setSelectInputValue] = useState('');
  const selectMenuRef = useRef(null);
  const handleClick = (e) => {
    console.log(e.target.innerText);
    setSelectInputValue(e.target.innerText);
  };
  const offSetSelectMenu = () => {
    setSelectMenu(false);
  };
  const onSetSelectMenu = () => {
    setSelectMenu(true);
  };
  const outSideClick = (e) => {
    // 클릭한 곳 타겟 구하기
    if (!selectMenuRef.current.contains(e.target)) {
      offSetSelectMenu();
    }
  };
  useEffect((e) => {
    document.addEventListener('click', outSideClick);
  });
  return (
    <Container>
      <Center>
        <H4>거래</H4>
        <FormUnitBox>
          <Label htmlFor='search-code-input'>코인 코드</Label>
          <Input
            id='search-code-input'
            readOnly
            type='text'
            value={selectInputValue}
            placeholder={'코인 코드를 선택해주세요.'}
            onClick={onSetSelectMenu}
            ref={selectMenuRef}
          />
          <SelectMenu dropMenu={selectMenu}>
            <div>
              {ids !== [] &&
                ids.map((id) => {
                  const { code, name } = entites[id];
                  return (
                    <p key={`${id}-code-name`} onClick={handleClick}>
                      {code} ({name})
                    </p>
                  );
                })}
            </div>
          </SelectMenu>
        </FormUnitBox>
        <FormUnitBox>
          <Label htmlFor='search-min-input'>최소거래가</Label>
          <Input id='search-min-input' type='text' />
        </FormUnitBox>
        <FormUnitBox>
          <Label htmlFor='search-max-input'>최대거래가</Label>
          <Input id='search-max-input' type='text' />
        </FormUnitBox>
        <BasicBtn color='point' name='검색'></BasicBtn>
      </Center>
    </Container>
  );
};

const Container = styled.div`
  ${flexCenter}
  width: 100%;
  background-color: ${(props) => props.theme.white};
`;

const Center = styled.div`
  display: flex;
  border-radius: 2px;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.theme.middleGray};
  padding-top: 8px;
`;

const H4 = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin: 30px;
`;
const FormUnitBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 6px;
`;
const Input = styled.input`
  color: ${(props) => props.theme.black};
  border: 1px solid ${(props) => props.theme.middleGray};
  border-radius: 2px;
  padding: 10px;
  width: 170px;
  &::placeholder {
    font-size: 12px;
  }
`;
const SelectMenu = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.dropMenu ? 'block' : 'none')};
  position: absolute;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.middleGray};
  top: 30px;
  /* padding: 20px 0 20px 20px; */
  border-radius: 2px;
  width: 192px;
  height: 130px;
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding: 10px 0px 10px 10px;

    p {
      font-size: 12px;
      padding: 8px 0;
      color: ${(props) => props.theme.black};
      transition: 0.2s color;
      &:last-child {
        padding-bottom: 27px;
      }
    }
    p:hover {
      cursor: default;
      color: ${(props) => props.theme.point};
      transition: 0.2s color;
    }
  }
`;
const Label = styled.label`
  position: absolute;
  top: -12px;
  font-size: 10px;
  & {
    color: ${(props) => props.theme.darkGray};
  }
`;
const mapStateToProps = (state, props) => {
  const { ids, entites } = state;
  return {
    ids,
    entites,
  };
};
export default connect(mapStateToProps)(SearchContainer);
