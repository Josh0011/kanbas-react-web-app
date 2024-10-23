import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/robots2.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        EE1121 Intro to Robotics
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Robots and AI
                                    </p>
                                    <p className="section">
                                        Fall 2024 Section 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/homelander.jpg.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        HR1111 Intro to Crime fighting
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        How To Be a Hero
                                    </p>
                                    <p className="section">
                                        Fall 2024 Section 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/tensor.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MATH4545 Tensor Calculus
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Introduction to Formal Tensor Calculus
                                    </p>
                                    <p className="section">
                                        Fall 2024 Section 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/space.jpg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        PHYS2303 General Relativity
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intro to Cosmology and Relativity
                                    </p>
                                    <p className="section">
                                        Fall 2024 Section 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/minecraft.webp" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MC101 Intro Minecraft
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Building, farming, and fighting
                                    </p>
                                    <p className="section">
                                        Fall 2024 Section 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/magic.jpeg" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        MM7787 Advanced Magic
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        High Level Spirits and Spells
                                    </p>
                                    <p className="section">
                                        Fall 2024 Section 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{width: "300px"}}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/rock.png" width="100%" height={160}/>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        HIST3033 History of Rocks
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Rock History from 100 AD
                                    </p>
                                    <p className="section">
                                        Fall 2024 Section 1
                                    </p>
                                    <button className="btn btn-primary"> Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}