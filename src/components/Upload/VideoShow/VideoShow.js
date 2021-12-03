import React, { memo } from 'react'

export default memo(function VideoShow(props) {
    //
    const { refVideo, setDuration, file, refButtonClick } = props;
    //
    return (
        <div className="w-full absolute top-0 rounded-xl"
            style={{ height: "97%" }}>
            <video ref={refVideo} className="w-full h-full -mt-4 rounded-xl px-0.5" src={URL.createObjectURL(file)}
                onLoadedMetadata={() => {
                    setDuration(refVideo.current.duration)
                }}></video>
            <button className="hidden" type="button" ref={refButtonClick} onClick={() => {
                if (refVideo.current) {
                    refVideo.current.play();
                }
            }}></button>
        </div>
    )
});
