import React from 'react';

import expertImg from '../../assets/expert.png';
import Button from '../../components/Button/StandardRed';

import MenuBar from '../../components/MenuBar';
import HeadedLayout from '../../layouts/HeadedLayout';
import './style.css';

const Video = () => (
  <HeadedLayout
    header={<MenuBar />}
    content={
      <div className="videoRoot">
        <img className="videoExpert" src={expertImg} />
        <div className="videoSummary">
          <h1 className="videoSummaryTitle">{'Doctor Ramchandani\'s expert advice #1'}</h1>
          <h2 className="videoSummaryTip">{'1. Don\'t called her "baby" in front of babies.'}</h2>
          <Button className="videoSummarySkip">Skip Video</Button>
        </div>
      </div>
    }
   />
);

export default Video;
