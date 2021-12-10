import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

import styles from '../styles/Webcam.module.scss'

const WebcamContainer = (props) => {
    const webcamRef = useRef(null);

    const capture = useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        props.addPhoto(imageSrc)
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
            <p>Prends ta meilleure photo ;)</p>
            <Webcam 
                audio={false}
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