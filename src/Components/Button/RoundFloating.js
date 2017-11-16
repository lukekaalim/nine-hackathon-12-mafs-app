import React from 'react';
import cx from 'classnames';
import './style.css';

const RoundFloating = ({ children, className, ...props }) => (
  <button {...props} className={cx('roundFloating', className)}>
    {children}
  </button>
);

export default RoundFloating;
