const itemLoginStatics = [
    {
        id: 0,
        name: "Use QR code",
        icon: "bx bx-qr-scan text-xl",
        color: "text-black",
        handleClick: (actions, dispatch) => {
            dispatch(actions.openLoginWithQRCode())
        }
    },
    {
        id: 1,
        name: "Use email / phone / username",
        icon: "bx bx-user text-xl",
        color: "text-black",
        handleClick: (actions, dispatch) => {
            dispatch(actions.openLoginWithAccount())
        }
    },
    {
        id: 2,
        name: "Continue with Facebook",
        icon: "bx bxl-facebook-circle text-2xl",
        color: "text-blue-600"
    },
    {
        id: 3,
        name: "Continue with Google",
        icon: "bx bxl-google text-2xl",
        color: "text-green-500"
    },
    {
        id: 4,
        name: "Continue with Twitter",
        icon: "bx bxl-twitter text-2xl",
        color: "text-blue-300"
    },
    {
        id: 5,
        name: "Continue with LINE",
        icon: "fab fa-line text-2xl",
        color: "text-green-500"
    },
    {
        id: 6,
        name: "Continue with Kakao Talk",
        icon: "fab fa-speakap text-2xl",
        color: "text-yellow-500"
    },
    {
        id: 7,
        name: "Continue with Apple",
        icon: "bx bxl-apple text-2xl",
        color: "text-black"
    },
    {
        id: 8,
        name: "Continue with Instagram",
        icon: "bx bxl-instagram text-2xl",
        color: "text-pink-500"
    }
];

export default itemLoginStatics;