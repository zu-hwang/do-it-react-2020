import React, { PureComponent } from 'react';
import PTypes from 'prop-types';
import withStyles, { css } from './withStyles';
import { withStylesPropTypes } from 'react-with-styles';

class CheckBox extends PureComponent {
  componentDidMount = () => {
    if (this.props.autoFocus) {
      this.ref.focus;
    }
  };

  handleClick = (e) => {
    const { name, onChange } = this.props;
    onChange(name, e.target.checked);
  };

  setRef = (ref) => {
    this.ref = ref;
  };

  render() {
    const { errorMsg, label, children, styles, checked } = this.props;
    return (
      <label>
        {label}
        <div>
          <input
            ref={this.setRef}
            type='checkbox'
            checked={checked && 'checked'}
            onClick={this.handleClick}
          />
          {children}
        </div>
        {errorMsg && (
          <div>
            <span {...css(styles.errorText)}>{errorMsg}</span>
          </div>
        )}
      </label>
    );
  }
}

CheckBox.propTypes = {
  name: PTypes.string.isRequired,
  autoFocus: PTypes.bool,
  checked: PTypes.bool,
  onChange: PTypes.func,
};

CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(CheckBox);
