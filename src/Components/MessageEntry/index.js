import React, { Component } from 'react';

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
      <form onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onSubmit(text);
        this.onSubmit();
        return false;
      }}>
        <input type='text' onChange={(event) => this.onChange(event)} value={text}/>
        <input type='submit'/>
      </form>
    );
  }
}

export default MessageEntry;
