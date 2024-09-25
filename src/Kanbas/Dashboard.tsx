import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/robots2.webp" width={200}/>
                        <div>
                            <h5>
                                EE1121 Intro to Robotics
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Robots and AI
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/homelander.jpg.webp" width={200}/>
                        <div>
                            <h5>
                                HR1111 Intro to Crime fighting
                            </h5>
                            <p className="wd-dashboard-course-title">
                                How To Be a Hero
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/tensor.png" width={200}/>
                        <div>
                            <h5>
                                MATH4545 Tensor Calculus
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to Formal Tensor Calculus
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/space.jpg" width={200}/>
                        <div>
                            <h5>
                                PHYS2303 General Relativity
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Intro to Cosmology and Relativity
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/minecraft.webp" width={200}/>
                        <div>
                            <h5>
                                MC101 Intro Minecraft
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Building, farming, and fighting
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/magic.jpeg" width={200}/>
                        <div>
                            <h5>
                                MM7787 Advanced Magic
                            </h5>
                            <p className="wd-dashboard-course-title">
                                High Level Spirits and Spells
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/rock.png" width={200}/>
                        <div>
                            <h5>
                                HIST3033 History of Rocks
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Rock History from 100 AD
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

