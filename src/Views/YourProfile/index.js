import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../../actions/view';
import { resetAnswers } from '../../actions/quiz';
import MenuBar from '../../components/MenuBar';
import Button from '../../components/Button/StandardRed';
import GreyCurvedLayout from '../../layouts/GreyCurvedLayout';

import './style.css';

const mapStateToProps = (state) => ({
  yourProfile: state.users.allUsers[state.users.myId],
});

const mapDispachToProps = (dispatch) => ({
  goToQuiz: () => {
    dispatch(resetAnswers());
    dispatch(setView('quiz'));
  },
});

const YourProfile = ({ yourProfile, goToQuiz }) => (
  <div className="profileRoot">
    <GreyCurvedLayout
      header={<MenuBar />}
      primaryContent={
        <div>
          <div className="profileImageContainer">
            <div className="profileImage" style={{backgroundImage: `url(${yourProfile.image})`}}></div>
          </div>
          {`${yourProfile.firstName}, ${yourProfile.age}`}
        </div>
      }
      secondaryContent={
        <div>
          <h2>Your Profile</h2>
          <p>{yourProfile.bio}</p>
          <Button onClick={goToQuiz}>Find Love</Button>
        </div>
      }
      />
  </div>
);

export default connect(mapStateToProps, mapDispachToProps)(YourProfile);
