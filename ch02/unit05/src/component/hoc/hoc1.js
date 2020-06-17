// 함수형 컴포넌트를 반환하는 하이어오더 컴포넌트
function FuncHOCcompo(compo) {
  return function Enhanced(props) {
    return <Compo {...props} />;
  };
}

// 클래스형 컴포넌트를 반환하는 하이어오더 컴포넌트
function ClassHOCcompo(compo) {
  return class Enhanced extends React.Component {
    render() {
      return <Compo {...this.props} />;
    }
  };
}
