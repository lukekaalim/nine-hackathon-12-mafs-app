import React, { Component } from 'react';

import './style.css';

class UploadablePhoto extends Component {
  componentDidUpdate() {
    if(this.state.streaming && this.video) {
      this.video.srcObject = this.state.streamSource;
      this.video.play();
    }
  }

  startEditing() {
    navigator.mediaDevices.getUserMedia({ video: { width: 500, height: 500 }, audio: false })
    .then((stream) => {
      this.setState({
        streamSource: stream,
        streaming: true,
      });
    })
    .catch((err) => console.log(err));
  }

  stopEditing() {
    const context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, 500, 500);

    this.setState({
      streamSource: null,
      streaming: false,
      newImage: this.canvas.toDataURL('image/png'),
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      streaming: false,
      streamSource: null,
      newImage: null,
    };
  }

  render() {
    const { renderWithPhoto, photoProps, initalImage } = this.props;
    const { streaming, newImage } = this.state;

    const photo = streaming ?
      <video height='250' {...photoProps} ref={(video) => { this.video = video }} />
      :
      <img alt={''} {...photoProps} src={newImage || initalImage} />;

    return (
      <div onClick={() => streaming && this.stopEditing()} className="uploadablePhotoRoot">
        <canvas width='500' height='500' className="uploadablePhotoHiddenCanvas" ref={(canvas) => { this.canvas = canvas }}/>
        <div onClick={() => this.startEditing()} className="uploadablePhotoIcon" />
        {renderWithPhoto(photo)}
      </div>
    );
  }
}

export default UploadablePhoto;
