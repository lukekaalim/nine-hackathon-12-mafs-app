import React from 'react';
import { connect } from 'react-redux'

import { setView } from '../../actions/view';
import { resetAnswers } from '../../actions/quiz';
import { updateUser } from '../../actions/users';
import MenuBar from '../../components/MenuBar';
import Button from '../../components/Button/StandardRed';
import UploadablePhoto from '../../components/UploadablePhoto';
import GreyCurvedLayout from '../../layouts/GreyCurvedLayout';
import HeadedLayout from '../../layouts/HeadedLayout';

import './style.css';

const mapStateToProps = (state) => ({
  yourProfile: state.users.allUsers[state.users.myId],
  yourId: state.users.myId,
});

const mapDispachToProps = (dispatch, state) => ({
  goToQuiz: () => {
    dispatch(resetAnswers());
    dispatch(setView('quiz'));
  },
  updatePhoto: (newImage, userId) => dispatch(updateUser(userId, { image: newImage })),
});

const YourProfile = ({ yourProfile, goToQuiz, updatePhoto, yourId }) => (
  <div className="profileRoot">
    <HeadedLayout
      header={<MenuBar />}
      content={
        <GreyCurvedLayout
        primaryContent={
          <div className="yourProfilePrimary">
            <div className="yourProfileImageContainer">
              <UploadablePhoto
                initalImage={yourProfile.image}
                photoProps={{
                  className:'yourProfileImage',
                  alt:'alternative',
                }}
                onNewPhoto={(photo) => updatePhoto(photo, yourId)}
              />
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
