import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { mainFont } from '../util/theme';
import GBN from '../components/GBN';
import Notipication from '../components/Notipication';
import Modal from '../components/Modal';
import { setModalMode } from '../redux/actions';

const Layout = ({ children, setModalMode, modalMode }) => {
  console.log(modalMode);
  return (
    <>
      <Modal mode={modalMode}></Modal>
      <Container>
        <GBN setModalMode={setModalMode} />
        {children}
        <Notipication />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.lightGray};
  height: 100vh;
  ${mainFont};
`;

const mapStateToProps = (state, props) => {
  console.log('layout');
  return { modalMode: state.modalMode };
};
export default connect(mapStateToProps, { setModalMode })(Layout);
