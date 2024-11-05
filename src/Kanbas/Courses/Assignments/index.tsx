import {BsChevronDown, BsGripVertical} from "react-icons/bs";
import {useParams} from "react-router";
import * as db from "../../Database";
import {FaPlus} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {IoEllipsisVertical} from "react-icons/io5";
import {PiNotebookDuotone} from "react-icons/pi";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
    const {cid} = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <div id="wd-modules-controls"
                 className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group" style={{width: "550px", height: "50px"}}>
                    <span className="input-group-text bg-white border-end-0">
                        <FaSearch className="text-muted"/>
                    </span>
                    <input
                        type="search"
                        className="form-control border-start-0"
                        placeholder="Search..."
                    />
                </div>
                <div>
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/Editor`}>
                        <button id="wd-add-assignment-group"
                                className="btn btn-lg btn-danger me-1 float-end">
                            <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>

                            Assignment
                        </button>
                    </Link>
                    <button id="wd-add-assignment"
                            className="btn btn-lg btn-secondary me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                        Group
                    </button>
                </div>
            </div>
            <br/><br/>

            <div>
                <ul id="wd-assignments" className="list-group rounded-0">
                    <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                        <div
                            className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between">
                            <div className="d-flex fw-bold align-items-center">
                                <BsGripVertical className="me-2 fs-3"/>
                                <BsChevronDown className="me-2"/>
                                ASSIGNMENTS
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="badge border border-dark text-dark-emphasis rounded me-2">
                                    40% of Total
                                </span>
                                <Link
                                    to={`/Kanbas/Courses/${cid}/Assignments/Editor`}
                                    className="btn btn-transparent p-0 me-2">
                                    <FaPlus/>
                                </Link>
                                <button className="btn btn-transparent p-0">
                                    <IoEllipsisVertical className="fs-4"/>
                                </button>
                            </div>
                        </div>
                        <ul id="wd-lessons" className="list-group rounded-0">
                            {assignments
                                .filter((assignment: any) => assignment.course === cid)
                                .map((assignment: any) => (
                                    <li className="wd-lesson list-group-item p-3 ps-1">
                                        <div
                                            className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <BsGripVertical className="me-2 fs-3"/>
                                                <PiNotebookDuotone
                                                    className="text-success me-2 fs-5"/>
                                                <div className="d-flex align-items-start ms-3">
                                                    <div className="d-flex flex-column">
                                                        <Link
                                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                            className="fw-bold mb-0 text-decoration-none text-dark"
                                                        >
                                                            {assignment.title}
                                                        </Link>
                                                        <span>
                                                            <span className="text-danger me-3">
                                                              Multiple Modules
                                                            </span>
                                                            <span className="text-muted">|</span>
                                                            <span className="ms-3">Not available until {dateFormat(assignment.available)} </span>
                                                            <span className="text-muted">|</span>
                                                            </span><span>
                                                            <span>Due {dateFormat(assignment.due)}</span>
                                                            <span className="ms-3 text-muted">|</span>
                                                            <span className="text-muted ms-3">{`${assignment.points} pts`}</span>
                                                          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <GreenCheckmark/>
                                                <IoEllipsisVertical className=" ms-4 fs-4"/>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </li>
                </ul>


            </div>

        </div>
    );
}

function dateFormat(inputDate: String) {
    const [month, day, year] = inputDate.split("/");
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return new Intl.DateTimeFormat("en-US", { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}
