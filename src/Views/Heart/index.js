import React from 'react';
import { connect } from 'react-redux'

import MenuBar from '../../components/MenuBar';
import HeadedLayout from '../../layouts/HeadedLayout';
import './style.css';

const mapStateToProps = (state) => ({
  matchableUsers: state.users.matchableUsers.map(id => state.users.allUsers[id]),
});

const Heart = ({ matchableUsers }) => (
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
          <h2> 85% Match Rate </h2>
          <h3>{`${matchableUsers[0].firstName}, ${matchableUsers[0].age}`}</h3>
          <h4>9km away</h4>
        </div>
      </div>
    }
   />
);

export default connect(mapStateToProps)(Heart);
