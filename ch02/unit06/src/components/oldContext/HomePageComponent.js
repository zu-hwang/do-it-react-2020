import React, { PureComponent } from 'react';
// 최상위 컴포 감쌀 프로바이더
import LoadingProvider from './LoadingProvider';
// 버튼 종류
import ButtonNormal from './ButtonNormal';
import ButtonConsumer from './ButtonConsumer';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';

const TableComponent = () => (
  <>
    <ButtonNormal />
    <ButtonConsumer label='둘' />
  </>
);

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        {/* 토글 버튼 */}
        <div>
          <ButtonWithLoadingContext>상태변경</ButtonWithLoadingContext>
        </div>
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;
