import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link to="/Kanbas/Account/Signin" id="wd-course-signin-link"
                  className="list-group-item active border border-0 "> Signin </Link>
            <Link to="/Kanbas/Account/Signup" id="wd-course-signup-link"
                  className="list-group-item text-danger border border-0"> Signup </Link>
            <Link to="/Kanbas/Account/Profile" id="wd-course-profile-link"
                  className="list-group-item text-danger border border-0"> Profile </Link>
        </div>
    );}