import React from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { sendImage } from "../actions/sendImage";
import "../App.css";

var x;

class Image extends React.Component {
  setRef = (webcam) => {
    this.webcam = webcam;
  };

  captureImageEvery1s = () => {
    const imageSrc = this.webcam.getScreenshot();
    const isMatched = this.props.image.isMatched; // isMatched is obtained from redux state which is set to based on api response.
    const imageData = {
      imageSrc,
    };
    if (isMatched === false) {
      console.log("Not Matched");
      this.props.sendImage(imageData); // if isMatched is false call the action "sendImage()"
    } else {
      console.log("Matched");
      clearInterval(x);
    }
  };

  capture = () => {
    x = setInterval(this.captureImageEvery1s, 1000); // images will be captured every second
  };

  stopCapture = () => {
    clearInterval(x);
  };

  componentDidMount() {
    //as soon as the component loads this function is called.
    setTimeout(this.capture, 3000); // start the capturing of screencshots
    setTimeout(this.stopCapture, 15000); // capturing of screenshots is stopped.
  }

  render() {
    const videoConstraints = {
      facingMode: "user",
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={720}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
      </div>
    );
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {
  sendImage,
})(withRouter(Image));
