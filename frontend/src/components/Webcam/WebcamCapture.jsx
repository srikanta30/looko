import React from "react";
import Webcam from "react-webcam";
import Button from '../Utils/Button';
import BottomNav from '../Utils/BottomNav';

export const WebcamCapture = () => {
  const videoConstraints = {
    width: 375,
    height: 650,
    facingMode: "user"
  };

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [captured, setCaptured] = React.useState(false);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot({width: 375, height: 650});
      setImgSrc(imageSrc);
      setCaptured(true);
    }, [webcamRef, setImgSrc, setCaptured]);
  
    return (
      <><div>
        {captured ? ( <div class="webcam_container">
          <img
            src={imgSrc}
          alt="Captured_Photo"/>
         <Button style={{marginTop: 30}} text="SHOW ME THE RESULT" handleClick={capture}/> <BottomNav/> </div>):(<div class="webcam_container"><Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <Button style={{marginTop: 30}} text="CAPTURE PHOTO" handleClick={capture}/> <BottomNav/> </div>)}

        
        </div>
      </>
    );
  };
