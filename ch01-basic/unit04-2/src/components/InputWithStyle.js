import React, { PureComponent } from 'react';
import PTypes from 'prop-types';

class InputWithStyle extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, value, name, type } = this.props;
    return (
      <div className='input-field'>
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && 'invalid'}`}
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          defaultValue={value}
        />
        <label className='active' htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className='helper-text' data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

InputWithStyle.propTypes = {
  type: PTypes.oneOf(['text', 'number', 'price']),
  name: PTypes.string.isRequired,
  valuse: PTypes.oneOfType([PTypes.number, PTypes.string]),
  errorMessage: PTypes.string,
  label: PTypes.string,
  onChange: PTypes.func,
  autoFocus: PTypes.bool,
};

InputWithStyle.defaultProps = {
  type: 'text',
  onChange: () => {},
  autoFocus: false,
};

export default InputWithStyle;
