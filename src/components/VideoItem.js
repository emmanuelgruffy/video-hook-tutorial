import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video_Id: "",
      videoDesc: "",
      videoTitle: "",
    };
  }
  componentDidMount() {
    this.setState({
      video_Id: this.props.video.id.videoId,
      videoDesc: this.props.video.snippet.description,
      videoTitle: this.props.video.snippet.title,
    });
  }
  handleClick = () => {
    this.props.onVideoItemClick(
      this.state.video_Id,
      this.state.videoDesc,
      this.state.videoTitle
    );
    console.log("item was clicked");
    console.log(this.state.video_Id);
  };
  render() {
    return (
      <div>
        <li style={{ marginBottom: "20px" }}>
          <button
            className="itemButton"
            onClick={this.handleClick}
            value={this.state.video_Id}
          >
            <img
              className="itemImage"
              alt={this.props.video.snippet.description}
              src={this.props.video.snippet.thumbnails.medium.url}
            />
          </button>
          <br />
          <div className="itemTitle">
            <p>{this.props.video.snippet.title}</p>
          </div>
        </li>
      </div>
    );
  }
}

export default VideoItem;
