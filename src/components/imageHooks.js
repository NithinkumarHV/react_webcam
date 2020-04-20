import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

var x;

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("Image", imageSrc);
  }, [webcamRef]);

  const stopCapture = () => {
    clearInterval(x);
  };

  React.useEffect(() => {
    x = setInterval(capture, 1000);
    setTimeout(stopCapture, 15000);
  });

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </>
  );
};

export default WebcamCapture;
