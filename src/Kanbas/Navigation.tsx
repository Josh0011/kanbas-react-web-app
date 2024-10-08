import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa6";
import { PiUserCircleDuotone } from "react-icons/pi";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{width: 120}}
             className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank"
               href="https://www.northeastern.edu/"
               className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px"/></a>
            <NavLink to="/Kanbas/Account" id="wd-account-link"
                  className="list-group-item text-center border-0 bg-black text-white">
                <PiUserCircleDuotone className="fs-1 text text-white"/><br/>
                Account </NavLink>
            <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <AiOutlineDashboard className="fs-1 text-danger"/><br/>
                Dashboard </NavLink>
            <NavLink to="/Kanbas/Courses/1234/Home" id="wd-course-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger"/><br/>  Courses </NavLink>
            <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <IoCalendarOutline className="fs-1 text-danger"/><br/>  Calendar </NavLink>
            <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <FaInbox className="fs-1 text-danger"/><br/>  Inbox </NavLink>
            <NavLink to="/Labs" id="wd-labs-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaCogSolid className="fs-1 text-danger"/><br/>  Labs </NavLink>

        </div>
);}

