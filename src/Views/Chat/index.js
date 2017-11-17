import React from 'react';
import { connect } from 'react-redux'
import cx from 'classnames';

import { addMessage } from '../../actions/chat';

import MenuBar from '../../components/MenuBar';
import MessageEntry from '../../components/MessageEntry';
import HeadedLayout from '../../layouts/HeadedLayout';
import './style.css';

const mapDispatchToProps = (dispatch) => ({
  addMessage: (conversationId, text, time, id) => dispatch(addMessage(conversationId, text, time, id)),
});

const mapStateToProps = ({ chat, users }) => ({
  conversationId: chat.currentConversation,
  currentConversation: chat.conversations[chat.currentConversation],
  participant: users.allUsers[chat.conversations[chat.currentConversation].userId],
  myId: users.myId,
});

const Chat = ({ currentConversation, participant, addMessage, myId, conversationId }) => (
  <HeadedLayout
    header={<MenuBar />}
    content={
      <div className="chatRoot">
        <div className="chatLogs">
          {currentConversation.content.map((message, index) => (
            <div key={index} className='chatMessageContainer'>
              <div className={cx('chatMessage', { right: message.author === myId})}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="chatMessageEntry">
          <MessageEntry onSubmit={(text) => addMessage(conversationId, text, Date.now(), myId)}/>
        </div>
      </div>
    }
   />
);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
