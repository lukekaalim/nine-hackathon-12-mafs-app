import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../../actions/view';
import HeadedLayout from '../../layouts/HeadedLayout';
import GreyCurvedLayout from '../../layouts/GreyCurvedLayout';
import MenuBar from '../../components/MenuBar';
import Button from '../../components/Button/StandardRed';

import combined from '../../assets/users/combined.png';

import './style.css';

const mapDispatchToProps = (dispatch) => ({
  goToChat: () => dispatch(setView('chat')),
});

const mapStateToProps = (state) => ({
  yourProfile: state.users.allUsers[state.users.myId],
  matchableUsers: state.users.matchableUsers.map(id => state.users.allUsers[id]),
});

const Committment = ({ yourProfile, matchableUsers, goToChat }) => (
  <HeadedLayout
    header={<MenuBar />}
    content={
      <GreyCurvedLayout
        primaryContent={
          <div className='committmentRoot'>
            <h1 className="committmentTitle"> {'It\'s a Committment!'} </h1>
            <div className="committmentDoubleImageContainer">
            {/*
              <div className="committmentImageContainer left">
                <img className="committmentImage" src={yourProfile.image} alt="tjing" />
              </div>
              <div className="committmentImageContainer right">
                <img className="committmentImage" src={matchableUsers[0].image} alt="tjing" />
              </div>
            */}
            <img className="committmentImageCombined" src={combined} alt=''/>
            </div>
          </div>
        }
        secondaryContent={
          <div className="committmentSecondaryRoot">
            <Button className="committmentStartTalking" onClick={goToChat}>Start Talking</Button>
            <button className="committmentCancel">or keep Searching</button>
          </div>
        }
      />
    }
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(Committment);
