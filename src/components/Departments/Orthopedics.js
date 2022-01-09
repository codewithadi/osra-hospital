import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";

const treatmentsOffered = [
    {
        name: "Joint Diseases",
        detail: "",
        logo: "",
    },
    {
        name: "Tumors",
        detail: "",
        logo: "",
    },
    {
        name: "Trauma closed and open reduction",
        detail: "",
        logo: "",
    },
    {
        name: "Local joint Injections",
        detail: "",
        logo: "",
    },
    {
        name: "Plaster cast (POP)",
        detail: "",
        logo: "",
    },
    {
        name: "Tendon repair",
        detail: "",
        logo: "",
    },
    {
        name: "Arthroplasty",
        detail: "",
        logo: "",
    },
    {
        name: "Sports Injury",
        detail: "",
        logo: "",
    },
];

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
                            Orthopedics is the branch of medicine concerned with
                            diseases, injuries and conditions of the
                            musculoskeletal system or the body's muscles and
                            skeleton. This structure also includes the joints,
                            tendons, ligaments and nerves.
                            <br />
                            <br />
                            The vision of the Department of Orthopaedics is to
                            achieve the goal to offer painless, total,
                            functional recovery to patients
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/department/13-min.png"
                            alt="earnose"
                        />
                    </div>
                </div>
            </div>
            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        The Orthopaedic department at our hospitals delivers
                        personalised care utilising the latest research and
                        evidence-based medicine.
                    </p>
                    <div className="depLine"></div>
                </div>

                <div className="treatmentWrapper">
                    {treatmentsOffered.map((item, index) => (
                        <>
                            <div className="treatmentCard" key={index}>
                                {/* for logo uncomment n remove check */}
                                {/* <div className="treatmentLogo">
                  <img src="/assets/department/surgery.png" alt="anyimg" />
                </div> */}
                                <div className="checkLogo">
                                    <img
                                        src="/assets/dr/customcheck.jpg"
                                        alt="check"
                                    />
                                </div>
                                <div className="treatmentText">
                                    <h2 className="treatmentTitle">
                                        {item.name}
                                    </h2>
                                    {/* for content  */}
                                    {/* <p className="treatmentAbout">
                    Dunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p> */}
                                </div>
                            </div>
                        </>
                    ))}
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
            {/* 
      <div className="depBanner">
        <img
          class="depBannerImg"
          src="/assets/department/depLastBack.jpg"
          alt="anyimg"
        />
        <div className="depBannerOverlay">
          <h3 className="depBannerText">Reliable & Trusted</h3>
          <h1 className="depBannerHead">Get the Best Ortho Treatment</h1>
          <p className="depBannerPara">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <div className="depBannerButton">
            <a className="depBannerBtn" href="/contact">
              Contact Us Now
            </a>
          </div>
        </div>
      </div> */}
        </div>
    );
}

export default Orthopedics;
