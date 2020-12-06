import React from "react";
import "./videoDetails.css";

class VideoDetail extends React.Component {
  render() {
    if (this.props.videoId) {
      return (
        <div className="videoDetails">
          <div>
            <iframe
              title={this.props.videoTitle}
              width="420"
              height="315"
              src={`https://www.youtube.com/embed/${this.props.videoId}`}
            ></iframe>
          </div>
          <div className="videoDescription">
            <p>{this.props.videoDetails}</p>
          </div>
        </div>
      );
    } else if (this.props.videoDefault) {
      return (
        <div className="videoDetails">
          <div>
            <iframe
              title={this.props.videoDefault.snippet.title}
              width="420"
              height="315"
              src={`https://www.youtube.com/embed/${this.props.videoDefault.id.videoId}`}
            ></iframe>
          </div>
          <div className="videoDescription">
            <p>{this.props.videoDefault.snippet.description}</p>
          </div>
        </div>
      );
    } else {
      return <div>this is where your video will be uploaded</div>;
    }
  }
}

export default VideoDetail;
