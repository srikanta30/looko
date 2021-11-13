import React from "react";
import Webcam from "react-webcam";
import Button from "../Utils/Button";
import spinner from "./spinner.gif";
import Results from "../Results/Results";
import {Header} from "../Utils/Header";
import "./webcam.css";

export const WebcamCapture = () => {
  const videoConstraints = {
    width: 375,
    height: 650,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [captured, setCaptured] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 375,
      height: 650,
    });
    setImgSrc(imageSrc);
    setCaptured(true);
  }, [webcamRef, setImgSrc, setCaptured]);

  const handleResult = React.useCallback(() => {
    setResult(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [setResult, setLoading]);

  return (
    <>
      <div>
        {captured ? (
          result ? (
            loading ? (
              <div className="loader">
                <img alt="loading" src={spinner} />
              </div>
            ) : (
              <div className="resultsdiv">
                <Header/>
                <img src={imgSrc} alt="Captured_Photo" className="resultsphoto" />
                <Results />
              </div>
            )
          ) : (
            <div className="webcam_container">
              <img src={imgSrc} alt="Captured_Photo" />
              <Button
                style={{ marginTop: 30 }}
                text="SHOW ME THE RESULT"
                handleClick={handleResult}
              />
            </div>
          )
        ) : (
          <div className="webcam_container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <Button
              style={{ marginTop: 30 }}
              text="CAPTURE PHOTO"
              handleClick={capture}
            />
          </div>
        )}
      </div>
    </>
  );
};
