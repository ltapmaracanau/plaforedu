import { Input } from "antd";
import React, { forwardRef } from "react";
import ReactInputMask from "react-input-mask";
import PropTypes from "prop-types";

const InputMask = forwardRef((props, ref) => {
  const { disabled } = props;
  return (
    <ReactInputMask {...props}>
      {(inputProps) => (
        <Input
          {...inputProps}
          ref={ref}
          disabled={disabled ? disabled : null}
        />
      )}
    </ReactInputMask>
  );
});
InputMask.displayName = "InputMask";
InputMask.propTypes = {
  mask: PropTypes.string,
  maskChar: PropTypes.string,
  formatChars: PropTypes.object,
  alwaysShowMask: PropTypes.bool,
  inputRef: PropTypes.func,
};

export default InputMask;
