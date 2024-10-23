import {Link, useLocation} from "react-router-dom";
import {useParams} from "react-router";


export default function CoursesNavigation() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((links) => (
                <Link key={links} to={links} className={`list-group-item border border-0
                  ${pathname.includes(links) ? "active" : "text-danger"}`}>
                    {links}
                </Link>
            ))}
        </div>
    );}




