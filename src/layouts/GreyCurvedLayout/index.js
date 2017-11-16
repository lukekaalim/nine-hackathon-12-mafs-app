import React from 'react';
import './style.css';

const GreyCurvedLayout = ({ primaryContent, secondaryContent }) => (
  <div className='greyCurvedLayoutRoot'>
    <div className='greyCurvedLayoutPrimaryContent'>{primaryContent}</div>
    <div className="greyCurve" />
    <div className='greyCurvedLayoutSecondaryContent'>{secondaryContent}</div>
  </div>
);

export default GreyCurvedLayout;
