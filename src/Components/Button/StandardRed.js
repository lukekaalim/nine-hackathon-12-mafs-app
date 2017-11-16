import React from 'react';
import cx from 'classnames';
import './style.css';

const StandardRedButton = ({ children, className, ...props }) => (
  <button {...props} className={cx('standardRedButton', className)}>
    {children}
  </button>
);

export default StandardRedButton;
