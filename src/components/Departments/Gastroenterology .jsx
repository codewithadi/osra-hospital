import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
const treatmentsOffered = [
    {
        name: "Herpetology and Endoscopy",
        detail: "",
        logo: "",
    },
    {
        name: "Diagnose and treating internal Medicine",
        detail: "",
        logo: "",
    },
    {
        name: "Liver Diseases",
        detail: "",
        logo: "",
    },
    {
        name: "Gastrointestinal",
        detail: "",
        logo: "",
    },
    {
        name: "Pancreatic Diseases",
        detail: "",
        logo: "",
    },
];

function Gastroenterology() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("gastroenterology")
    );
    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/9-min.png"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">Gastroenterology</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">
                            Gastroenterology Department
                        </h1>
                        <div className="depDetailAbout">
                            Gastroenterology is a medical specialty dealing with
                            the study of the digestive system and its disorders.
                            ... Gastrointestinal services incorporate a joint
                            medical and surgical approach for the prevention,
                            diagnosis and treatment of gastrointestinal, liver
                            and pancreatic disorders including cancer.
                            <br />
                            <br />
                            The department is manned by esteemed and experienced
                            gastroenterologists, efficient medical officers,
                            skilled and compassionate paramedical staff, and
                            well-trained technicians. The aim of the department
                            is to provide a patient-focused approach.
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/Gastroenterology.jpg"
                            alt="Gastroenterology"
                        />
                    </div>
                </div>
            </div>
            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our Gastroenterology Department is dedicated to
                        exceeding expectations. We provide cutting edge treatmen
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
                                        src="/assets/dr/check.png"
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
                        Doctors in Gastroenterology are
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
            </div> */}
        </div>
    );
}

export default Gastroenterology;
