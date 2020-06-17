import React, { PureComponent } from 'react';
import PTypes from 'prop-types';

export default class InputCompo extends PureComponent {
  handleChange = (e) => {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  };
  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.refs.focus;
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMsg, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input
          id={`input-${name}`}
          ref={this.setRef}
          onChange={this.handleChange}
          onFocus={onFocus} // 상위 컴포 조정
          value={value}
          type={type}
        />
        {errorMsg && <span className='error'>{errorMsg}</span>}
      </label>
    );
  }
}

InputCompo.propTypes = {
  type: PTypes.oneOf(['text', 'number', 'price']), // oneOf 주어진 배열중 하나 값
  name: PTypes.string.isRequired,
  value: PTypes.oneOfType([PTypes.number, PTypes.string]),
  errorMsg: PTypes.string,
  label: PTypes.string,
  onChange: PTypes.func,
  onFocus: PTypes.func,
  autoFocus: PTypes.bool,
};

InputCompo.defaultCompo = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};
