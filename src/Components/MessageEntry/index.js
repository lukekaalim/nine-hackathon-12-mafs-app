import React, { Component } from 'react';
import cx from 'classnames';

import './style.css';

class MessageEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onSubmit() {
    this.setState({
      text: '',
    });
  }

  render() {
    const { text } = this.state;
    const { onSubmit } = this.props;
    return (
      <form className="messageEntryForm" onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onSubmit(text);
        this.onSubmit();
        return false;
      }}>
        <button className="messageEntryGIFButton"> GIF </button>
        <input
          className="messageEntryTextEntry"
          type='text'
          placeholder='Type a Message...'
          onChange={(event) => this.onChange(event)}
          value={text}
        />
        <input
          className={cx('messageEntrySubmit', { 'active': text !== '' })}
          type='submit'
          value='send'
        />
      </form>
    );
  }
}

export default MessageEntry;
