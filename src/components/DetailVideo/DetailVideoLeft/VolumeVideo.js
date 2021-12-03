import React from 'react'

export default function VolumeVideo(props) {
    //
    const Button = props.Button;
    //
    return (
        <div className="absolute bottom-0 right-0 z-50">
            <div className="relative item__hover p-5" >
                <Button className="w-10 h-10 text-2xl">
                    <i className='bx bx-volume-full'></i>
                </Button>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full hover__block -mb-2 w-12 
                flex justify-center">
                    <div className="relative flex justify-center">
                        <div className="h-24 w-1 bg-gray-500" style={{ height: 90 }}>

                        </div>
                        <div className="absolute z-50 bottom-0 transfrom -translate-x-1/2">
                            <div className="relative">
                                <div className="w-1 bg-white" style={{ height: 45 }}>

                                </div>
                                <span className="w-5 h-5 bg-white absolute left-1/2 transform -translate-x-1/2
                                rounded-full z-50 cursor-pointer" style={{ top: -10 }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
