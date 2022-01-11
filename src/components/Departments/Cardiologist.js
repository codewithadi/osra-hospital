import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";

const treatmentsOffered = [
    {
        name: "Internal medicine Cases",
        detail: "",
        logo: "",
    },
    {
        name: "Cardio Vascular System",
        detail: "",
        logo: "",
    },
    {
        name: "Trauma",
        detail: "",
        logo: "",
    },
    {
        name: "High Blood Pressure",
        detail: "",
        logo: "",
    },
    {
        name: "Diabetes",
        detail: "",
        logo: "",
    },
    {
        name: "Incision biopsy",
        detail: "",
        logo: "",
    },
    {
        name: "Excision Biopsy",
        detail: "",
        logo: "",
    },
    {
        name: "Diagnostic Laparoscopy",
        detail: "",
        logo: "",
    },
    {
        name: "Respiratory system",
        detail: "",
        logo: "",
    },
    {
        name: "Digestive system",
        detail: "",
        logo: "",
    },
];

function Cardiologist() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("cardiologist")
    );

    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/3-min.png"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">Cardiology</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">
                            Cardiology Department
                        </h1>
                        <div className="depDetailAbout">
                            Cardiology is the study and treatment of disorders
                            of the heart and the blood vessels. A person with
                            heart disease or cardiovascular disease may be
                            referred to a cardiologist. Cardiology is a branch
                            of internal medicine.
                            <br />
                            <br />A cardiologist is not the same as a cardiac
                            surgeon. A cardiac surgeon opens the chest and
                            performs heart surgery. A cardiologist specializes
                            in diagnosing and treating diseases of the
                            cardiovascular system.
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/department/Cardiology.jpg"
                            alt="earnose"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our department of Cardiology is dedicated to exceeding
                        expectations. We provide cutting edge treatment of
                        disorders below
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

            {/* <div className="depBanner">
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

export default Cardiologist;
