import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

import styles from '../styles/Webcam.module.scss'

const WebcamContainer = () => {
    const webcamRef = useRef(null);

    const capture = useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc)
        },
        [webcamRef]
    );

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    return (
        <div className={styles.Webcam}>
            <Webcam 
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
        </div>
    )
}

export default WebcamContainer