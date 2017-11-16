import React from 'react';
import { connect } from 'react-redux'

import './style.css';

import { setView } from '../../actions/view';

import chatImg from '../../assets/icons/chat.svg'
import chatActiveImg from '../../assets/icons/chat_active.svg'

import videoImg from '../../assets/icons/video.svg'
import videoActiveImg from '../../assets/icons/video_active.svg'

import profileImg from '../../assets/icons/profile.svg'
import profileActiveImg from '../../assets/icons/profile_active.svg'

import heartImg from '../../assets/icons/heart.svg'
import heartActiveImg from '../../assets/icons/heart_active.svg'

const mapStateToProps = (state) => ({
  currentView: state.view.currentView,
});

const mapDispachToProps = (dispatch) => ({
  goToProfile: () => dispatch(setView('yourprofile')),
  goToHeart: () => dispatch(setView('heart')),
  goToVideo: () => dispatch(setView('video')),
  goToChat: () => dispatch(setView('chat')),
});

const MenuBar = ({ currentView, goToProfile, goToHeart, goToVideo, goToChat }) => (
  <nav className='menuBarRoot'>
    <button className='menuBarButton' onClick={goToProfile}>
      <img src={currentView === 'yourprofile' ? profileActiveImg : profileImg} alt="profile" />
    </button>
    <button className='menuBarButton' onClick={goToHeart}>
      <img src={currentView === 'heart' ? heartActiveImg : heartImg} alt="heart" />
    </button>
    <button className='menuBarButton' onClick={goToVideo}>
      <img src={currentView === 'video' ? videoActiveImg : videoImg} alt="video" />
    </button>
    <button className='menuBarButton' onClick={goToChat}>
      <img src={currentView === 'chat' ? chatActiveImg : chatImg} alt="chat" />
    </button>
  </nav>
);

export default connect(mapStateToProps, mapDispachToProps)(MenuBar);
