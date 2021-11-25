const itemSigninStatics = [
    {
        id: 1,
        name: "Use phone or email",
        icon: "bx bx-user text-xl",
        color: "text-black",
        handleClick: (actions, dispatch) => {
            dispatch(actions.openSignInWithAccount())
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
];

export default itemSigninStatics;