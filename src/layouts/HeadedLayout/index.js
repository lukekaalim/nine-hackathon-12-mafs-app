import React from 'react';
import './style.css';

const HeadedLayout = ({ header, content }) => (
  <div className='headedLayoutRoot'>
    <div className='headedLayoutHeader'>
      {header}
    </div>
    <div className='headedLayoutContent'>
      {content}
    </div>
  </div>
);

export default HeadedLayout;
