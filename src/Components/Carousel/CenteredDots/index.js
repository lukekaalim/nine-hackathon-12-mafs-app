import React from 'react';
import cx from 'classname'
import { times } from 'lodash';

import './style.css';

const CenteredDots = (currentDotIndex, totalDots, onClickDot) => (
  <ul>
  {
    times(totalDots, (index) => (
      <li
        key={index}
        className={cx('centeredDotsDot', { active: index===currentDotIndex })}
        onClick={onClickDot}
      />
    ))
  }
  </ul>
);

export default CenteredDots;
