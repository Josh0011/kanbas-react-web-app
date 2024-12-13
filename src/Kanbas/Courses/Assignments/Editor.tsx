import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector(
        (state: any) => state.assignmentsReducer.assignments
    );

    const existingAssignment = assignments.find((a: any) => a._id === aid);

    const [assignment, setAssignment] = useState(
        existingAssignment || {
            _id: aid || "TBD",
            course: cid || "TBD",
            title: "",
            points: 100,
            available: "01/1/2099",
            due: "01/1/2099",
        }
    );
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-4 float-end" style={{width: "80%"}}>
                <label htmlFor="wd-name" className="form-label">
                    Assignment Name
                </label>
                <input
                    type="text"
                    id="wd-name"
                    value={assignment.title}
                    className="form-control"
                    onChange={(e) =>
                        setAssignment({...assignment, title: e.target.value})
                    }
                />
            </div>
            <div className="mb-4 float-end" style={{width: "80%"}}>
        <textarea
            id="wd-name"
            value={""}
            className="form-control"
            style={{height: "200px"}}
        />
            </div>
            <div className="row float-end" style={{width: "80%"}}>
                <div className="col-md-12">
                    <div className="d-flex flex-column align-items-end">
                        <div className="d-flex mb-3 w-100">
                            <label
                                htmlFor="wd-points"
                                className="form-label me-3 w-25 text-end"
                                style={{whiteSpace: "nowrap"}}
                            >
                                Points
                            </label>
                            <input
                                type="value"
                                id="wd-points"
                                className="form-control"
                                style={{width: "70%"}}
                                value={assignment.points}
                                onChange={(e) =>
                                    setAssignment({
                                        ...assignment,
                                        points: Number(e.target.value),
                                    })
                                }
                            />
                        </div>
                        <div className="d-flex mb-3 w-100">
                            <label
                                htmlFor="wd-group"
                                className="form-label me-3 w-25 text-end"
                                style={{whiteSpace: "nowrap"}}
                            >
                                Assignment Group
                            </label>
                            <select
                                id="wd-group"
                                className="form-select"
                                style={{width: "70%"}}
                            >
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="PROJECTS">PROJECTS</option>
                            </select>
                        </div>
                        <div className="d-flex mb-3 w-100">
                            <label
                                htmlFor="wd-display-grade-as"
                                className="form-label me-3 w-25 text-end"
                                style={{whiteSpace: "nowrap"}}
                            >
                                Display Grade as
                            </label>
                            <select
                                id="wd-display-grade-as"
                                className="form-select"
                                style={{width: "70%"}}
                            >
                                <option value="Percentage">Percentage</option>
                                <option value="Points">Points</option>
                                <option value="Fraction">Fraction</option>
                            </select>
                        </div>
                        <div className="d-flex mb-3 w-100">
                            <label
                                htmlFor="wd-submission-type"
                                className="form-label me-3 w-25 text-end"
                                style={{whiteSpace: "nowrap"}}
                            >
                                Submission Type
                            </label>
                            <div className="border p-3 mb-3" style={{width: "70%"}}>
                                <div className="d-flex mb-3">
                                    <select id="wd-submission-type" className="form-select mb-2">
                                        <option value="Online">Online</option>
                                        <option value="In Person">In Person</option>
                                        <option value="Asynchronous">Asynchronous</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label fw-bold">
                                        Online Entry Options
                                    </label>
                                    <div className="form-check mb-3 mt-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="wd-text-entry"
                                        />
                                        <label className="form-check-label" htmlFor="wd-text-entry">
                                            Text Entry
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="wd-website-url"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="wd-website-url"
                                        >
                                            Website URL
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="wd-media-recordings"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="wd-media-recordings"
                                        >
                                            Media Recordings
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="wd-student-annotation"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="wd-student-annotation"
                                        >
                                            Student Annotation
                                        </label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="wd-file-upload"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="wd-file-upload"
                                        >
                                            File Uploads
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mb-3 w-100">
                            <label
                                htmlFor="wd-assign-to"
                                className="form-label me-3 w-25 text-end"
                                style={{whiteSpace: "nowrap"}}
                            >
                                Assign
                            </label>
                            <div className="border p-3 mb-3" style={{width: "70%"}}>
                                <label htmlFor="wd-due-date" className="form-label fw-bold">
                                    Assign To
                                </label>
                                <div className="d-flex mb-3">
                                    <input
                                        type="text"
                                        id="wd-assign-to"
                                        className="form-control"
                                        value="Everyone"
                                    />
                                </div>
                                <label htmlFor="wd-due-date" className="form-label fw-bold">
                                    Due
                                </label>
                                <div className="d-flex mb-3">
                                    <input
                                        type="date"
                                        id="wd-due-date"
                                        className="form-control"
                                        value={assignment.due}
                                        onChange={(e) => {
                                            const due = e.target.value;
                                            setAssignment({
                                                ...assignment,
                                                due,
                                            });
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label
                                            htmlFor="wd-available-from"
                                            className="form-label fw-bold"
                                        >
                                            Available From
                                        </label>
                                        <input
                                            type="date"
                                            id="wd-available-from"
                                            className="form-control"
                                            value={assignment.available}
                                            onChange={(e) => {
                                                const from = e.target.value;
                                                setAssignment({
                                                    ...assignment,
                                                    from,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="wd-available-until"
                                            className="form-label fw-bold"
                                        >
                                            Available Until
                                        </label>
                                        <input
                                            type="date"
                                            id="wd-available-until"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="float-end" style={{width: "80%", marginTop: "30px"}}/>
            <div className="text-end float-end" style={{width: "80%"}}>
                <button
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
                    className="btn btn-outline-secondary me-2"
                >
                    Cancel
                </button>
                <button
                    onClick={() => {
                        if (existingAssignment) {
                            dispatch(updateAssignment(assignment));
                        } else {
                            dispatch(addAssignment(assignment));
                        }
                        navigate(`/Kanbas/Courses/${cid}/Assignments`);
                    }}
                    className="btn btn-danger"
                >
                    Save
                </button>
            </div>
        </div>
    );
}