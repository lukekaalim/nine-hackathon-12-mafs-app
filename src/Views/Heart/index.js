import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../../actions/view';

import MenuBar from '../../components/MenuBar';
import RoundFloating from '../../components/Button/RoundFloating';
import HeadedLayout from '../../layouts/HeadedLayout';
import './style.css';

const mapDispatchToProps = (dispatch) => ({
  goToCommittment: () => dispatch(setView('committment')),
});

const mapStateToProps = (state) => ({
  matchableUsers: state.users.matchableUsers.map(id => state.users.allUsers[id]),
});

const Heart = ({ matchableUsers, goToCommittment }) => (
  <HeadedLayout
    header={<MenuBar />}
    content={
      <div className="heartRoot">
        <div className="heartCarousel">
        {/* How about we implement a whole carousel at a late time?
          <Carousel
            carouselSlides={matchableUsers.map(userToProfileImage)}
          />
        */}
          <img className="matchableProfileImage" src={matchableUsers[0].image} alt={matchableUsers[0].firstName} />
        </div>
        <div className="heartControls">
          <div className="heartControlFloatingButtons">
            <RoundFloating className="heartControlCancel">X</RoundFloating>
            <RoundFloating className="heartControlCommit" onClick={goToCommittment}>{'<#3'}</RoundFloating>
          </div>
          <div className="heartControlSummaryContainer">
            <h1 className="heartControlSummaryMatchRate"> 85% Match Rate </h1>
            <h2 className="heartControlSummaryName">{`${matchableUsers[0].firstName}, ${matchableUsers[0].age}`}</h2>
            <h3 className="heartControlSummaryDistance">9km away</h3>
          </div>
        </div>
      </div>
    }
   />
);

export default connect(mapStateToProps, mapDispatchToProps)(Heart);
