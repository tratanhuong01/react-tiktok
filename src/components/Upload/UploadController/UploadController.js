import React from 'react'

export default function UploadController(props) {
    //
    const { setFile } = props;
    //
    return (
        <div className="w-1/4" >
            <div className="w-full border-2 border-dashed border-gray-300 rounded-lg hover:border-color-main 
                cursor-pointer flex items-center justify-center" style={{ height: 450 }}>
                <div className="w-10/12 text-center text-sm text-gray-600">
                    <div className="text-center">
                        <i className="bx bxs-cloud-upload text-5xl" />
                    </div>
                    <p className="text-lg font-semibold">Select video to upload</p>
                    <p className="mb-5">Or drag and drop a file</p>
                    <p className="mb-2">MP4 or WebM</p>
                    <p className="mb-2">720x1280 resolution or higher</p>
                    <p> Up to 5 minutes</p>
                    <p>Less than 2 GB</p>
                    <div className="w-full my-4 text-center py-2">
                        <input type="file" className="hidden" id="videoUpload" onChange={(event) => {
                            if (event.target.files.length > 0) {
                                setFile(event.target.files[0]);
                            }
                        }} />
                        <label htmlFor="videoUpload">
                            <span className="px-12 py-3 bg-main text-white hover:bg-second 
                            font-semibold text-xm rounded-lg">
                                Select File
                            </span>
                        </label>
                    </div>

                </div>
            </div>
        </div>

    )
}
