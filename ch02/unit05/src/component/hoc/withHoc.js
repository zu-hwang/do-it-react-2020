import React from 'react';

export default function withHoc(WrappedCompo) {
  const { displayName, name } = WrappedCompo;
  const WrappedCompoName = displayName || name; // displayName 먼저 할당, 없으면 name이 할당
  // ? withHoc함수로 전달된 컴포넌트에게
  return class WithHoc extends React.Component {
    static displayName = `withHoc(${WrappedCompoName})`;
    // static displayName = `withHoc(${WrappedCompo.name})`; // 표기되는 이름 지정(스토리북/데브툴)
    render() {
      return <WrappedCompo {...this.props} />;
    }
  };
}
