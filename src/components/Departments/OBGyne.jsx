import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";

const treatmentsOffered = [
    {
        name: "Smears(e.g. pap smear)",
        detail: "",
        logo: "",
    },
    {
        name: "Biopsies",
        detail: "",
        logo: "",
    },
    {
        name: "CT Scan",
        detail: "",
        logo: "",
    },
    {
        name: "Conventional Diagnostic Radiology",
        detail: "",
        logo: "",
    },
    {
        name: "D&C",
        detail: "",
        logo: "",
    },
    {
        name: "Caesarean Section",
        detail: "",
        logo: "",
    },
    {
        name: "Normal Deliveries/instrumental Deliveries/ Epidural Injection (Painless)",
        detail: "",
        logo: "",
    },
    {
        name: "All other Gynecological operations",
        detail: "",
        logo: "",
    },
    {
        name: "Hysterectomy (Partial or Complete)",
        detail: "",
        logo: "",
    },
    {
        name: "Insertion & removal of IUD",
        detail: "",
        logo: "",
    },
    {
        name: "Episiotomy",
        detail: "",
        logo: "",
    },
    {
        name: "Perineal Repair",
        detail: "",
        logo: "",
    },
    {
        name: "Vaginal Re-Construction Surgeries",
        detail: "",
        logo: "",
    },
];

function OBGyne() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("obgyna")
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
                    <h1 className="depMainText">OB/Gyne</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">OB/Gyne Department</h1>
                        <div className="depDetailAbout">
                            Obstetrics and gynecology is a field thought of as
                            traditionally serving women because of it's focus on
                            the female reproductive system, leading care
                            providers to make assumptions about patients' gender
                            identity and expression in "women's health clinics"
                            when many transgender or nonbinary patients may also
                            seek care from OB-GYNs.
                            <br />
                            <br />
                            OB-GYNs also historically have more cultural
                            competency training around gender based issues..
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/obgyne.jpg"
                            alt="obgyne"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our physicians use a range of diverse treatments
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
                        Doctors in Obstetrics and Gynecology
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

export default OBGyne;
