export default function Modules() {
    return (
        <div>
            {/* Implement Collapse All button, View Progress button, etc. */}
            <button>Collapse All</button>
            <button>View Progress</button>
            <select>
                <option value="PUBLISH">Publish All</option>
                <option value="UNPUBLISH">Unpublish All</option>
            </select>
            <button>+ Module</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READINGS</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Javascript</li>
                                <li className="wd-content-item">Learn what is CSS</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Prepare yourself</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING REACT</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

