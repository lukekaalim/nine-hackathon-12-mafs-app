import React from 'react';

import MenuBar from '../../components/MenuBar';
import HeadedLayout from '../../layouts/HeadedLayout';
import './style.css';

const Chat = () => (
  <HeadedLayout
    header={<MenuBar />}
    content={
      <div>lel</div>
    }
   />
);

export default Chat;
