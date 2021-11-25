import React from 'react'
import WrapperModalAuthenication from '../WrapperModalAuthenication'

export default function LoginWithQRCode() {
    //
    //
    return (
        <WrapperModalAuthenication title="Log in with QR Code" backToMain={true}>
            <div className="w-full relative">
                <div className="w-full h-72">
                    <img src={`data:image/png;base64,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`}
                        alt=""
                        className="w-40 h-40 mx-auto -mt-5 mb-2"
                    />
                    <div className="w-2/3 mx-auto text-gray-800 text-sm text-center">
                        <p>1. Open the TikTok app on your mobile device and tap <b>Discover</b></p>
                        <p className="flex items-center justify-center">
                            2. Tap <i className="bx bx-scan text-xl mx-1"></i> and scan QR code
                        </p>
                        <p>3. Confirm your login on your mobile device</p>
                    </div>
                </div>
                <div className="block item__hover">
                    <div className="w-full h-72 hover__flex flex items-center justify-center absolute top-0 left-0 bg-white">
                        <img src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp_login/imgs/mobile-tip.68ce27b2.png"
                            alt="" className="w-40 h-64" />
                    </div>
                    <p className="text-main font-semibold flex justify-center items-center cursor-pointer">
                        <i className="bx bx-help-circle text-xl mr-2"></i> Check the instruction
                    </p>
                </div>
            </div>

        </WrapperModalAuthenication >
    )
}
