import Webcam from "react-webcam";

const Webcam = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
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
        <div>
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

export default Webcam