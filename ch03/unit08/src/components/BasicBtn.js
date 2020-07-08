import React from 'react';
import styled from 'styled-components';

const BasicBtn = ({ name, color, onClick }) => {
  return (
    <Button color={color} onClick={onClick}>
      {name}
    </Button>
  );
};

const Button = styled.button`
  border: 1px solid
    ${(props) =>
      props.color === 'point' ? props.theme.point : props.theme.middleGray};
  border-radius: 3px;
  width: 70px;
  padding: 9px;
  margin: 2px;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: normal;
  background-color: ${(props) =>
    props.color === 'point' ? props.theme.point : props.theme.white};
  color: ${(props) =>
    props.color === 'point' ? props.theme.white : props.theme.black};

  &:hover {
    cursor: pointer;
  }
`;

export default BasicBtn;
