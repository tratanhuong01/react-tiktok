import * as config from "../constants/Config";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import UploadPage from "../pages/UploadPage";

const routes = [
    {
        to: config.PAGE_HOME,
        extract: true,
        element: <HomePage />
    },
    {
        to: config.PAGE_UPLOAD,
        extract: true,
        element: <UploadPage />
    },
    {
        to: config.PAGE_PROFILE,
        extract: true,
        element: <ProfilePage />
    }
]

export default routes;