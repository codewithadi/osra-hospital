import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";

function Orthopedics() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("orthopedics")
    );
    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/depMain.jpg"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">Orthopedics</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">
                            Orthopedics Department
                        </h1>
                        <div className="depDetailAbout">
                            The department of a hospital responsible for the
                            provision of medical and surgical care to patients
                            arriving at the hospital in need of immediate care..
                        </div>
                        <p className="depDetailPara">
                            If you have a health problem with your head or neck,
                            your doctor might recommend that you see an
                            otolaryngologist. That's someone who treats issues
                            in your ears, nose, or throat as well as related
                            areas in your head and neck.
                        </p>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/earnose.jpg"
                            alt="earnose"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        There live the blind texts separated they right at the
                        coast of the Semantics.
                    </p>
                    <div className="depLine"></div>
                </div>

                <div className="treatmentWrapper">
                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/surgery.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">Joint Diseases </h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/surgery.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">Tumors </h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/blood-bank.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">
                                Trauma closed and open reduction{" "}
                            </h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/surgery.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">
                                Local joint Injections{" "}
                            </h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/blood-bank.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">
                                Plaster cast (POP){" "}
                            </h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/surgery.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">Tendon repair </h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/surgery.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">Arthroplasty </h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="treatmentCard">
                        <div className="treatmentLogo">
                            <img
                                src="/assets/department/surgery.png"
                                alt="anyimg"
                            />
                        </div>
                        <div className="treatmentText">
                            <h2 className="treatmentTitle">Sports Injury</h2>
                            <p className="treatmentAbout">
                                Dunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="depDoctors">
                <div className="depMain">
                    <h1 className="depMainHead">Department Doctors</h1>
                    <p className="depMainPara">
                        There live the blind texts separated they right at the
                        coast of the Semantics.
                    </p>
                    <div className="depLine"></div>
                </div>
                <div className="grid grid-cols-1 justify-center justify-items-center items-center gap-4 md:grid-cols-4 px-2 md:px-10">
                    {filterdDoc.map((doc, index) => (
                        <SingleDoctor
                            key={index}
                            imgUrl={doc.imgUrl}
                            name={doc.name}
                            position={doc.position}
                            mobno={doc.mobno}
                            email={doc.email}
                            linkto={doc.linkto}
                        />
                    ))}
                </div>
            </div>

            <div className="depBanner">
                <img
                    class="depBannerImg"
                    src="/assets/department/depLastBack.jpg"
                    alt="anyimg"
                />
                <div className="depBannerOverlay">
                    <h3 className="depBannerText">Reliable & Trusted</h3>
                    <h1 className="depBannerHead">
                        Get the Best Ortho Treatment
                    </h1>
                    <p className="depBannerPara">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Excepteur sint, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                    <div className="depBannerButton">
                        <a className="depBannerBtn" href="/contact">
                            Contact Us Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orthopedics;
