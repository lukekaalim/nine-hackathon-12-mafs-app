import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../../actions/view';
import { resetAnswers } from '../../actions/quiz';
import MenuBar from '../../components/MenuBar';
import Button from '../../components/Button/StandardRed';
import GreyCurvedLayout from '../../layouts/GreyCurvedLayout';
import HeadedLayout from '../../layouts/HeadedLayout';

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
    <HeadedLayout
      header={<MenuBar />}
      content={
        <GreyCurvedLayout
        primaryContent={
          <div className="yourProfilePrimary">
            <div className="yourProfileImageContainer">
              <img className="yourProfileImage" src={yourProfile.image} alt="tjing" />
            </div>
            <h1 className="yourProfileName">
              {`${yourProfile.firstName}, ${yourProfile.age}`}
            </h1>
          </div>
        }
        secondaryContent={
          <div className="yourProfileSecondary">
            <h2>Your profile</h2>
            <p>{yourProfile.bio}</p>
            <Button className="yourProfileFindLove" onClick={goToQuiz}>Find Love</Button>
          </div>
        }
        />
      }
    />
  </div>
);

export default connect(mapStateToProps, mapDispachToProps)(YourProfile);
