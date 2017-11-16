import React from 'react';
import { connect } from 'react-redux'

import HeadedLayout from '../../layouts/HeadedLayout';
import GreyCurvedLayout from '../../layouts/GreyCurvedLayout';
import MenuBar from '../../components/MenuBar';
import Button from '../../components/Button/StandardRed';

import './style.css';

const mapStateToProps = (state) => ({
  yourProfile: state.users.allUsers[state.users.myId],
  matchableUsers: state.users.matchableUsers.map(id => state.users.allUsers[id]),
});

const Committment = ({ yourProfile, matchableUsers}) => (
  <HeadedLayout
    header={<MenuBar />}
    content={
      <GreyCurvedLayout
        primaryContent={
          <div className='committmentRoot'>
            <h1 className="committmentTitle"> {'It\'s a Committment!'} </h1>
            <div className="committmentDoubleImageContainer">
              <div className="committmentImageContainer left">
                <img className="committmentImage" src={yourProfile.image} alt="tjing" />
              </div>
              <div className="committmentImageContainer right">
                <img className="committmentImage" src={matchableUsers[0].image} alt="tjing" />
              </div>
            </div>
          </div>
        }
        secondaryContent={
          <div className="committmentSecondaryRoot">
            <Button>Start Talking</Button>
            <button>Or keep Searching</button>
          </div>
        }
      />
    }
  />
);

export default connect(mapStateToProps)(Committment);
