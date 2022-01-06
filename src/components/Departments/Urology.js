import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
const treatmentsOffered = [
    {
        name: "Urethro - cystocopy",
        detail: "",
        logo: "",
    },
    {
        name: "Diagnostic Laparoscopy",
        detail: "",
        logo: "",
    },
    {
        name: "Pyelolithotomy",
        detail: "",
        logo: "",
    },
    {
        name: "ESWL",
        detail: "",
        logo: "",
    },
    {
        name: "Andrology",
        detail: "",
        logo: "",
    },
    {
        name: "Laproscopic Procedures",
        detail: "",
        logo: "",
    },
    {
        name: "Folley Catherization",
        detail: "",
        logo: "",
    },
];

function Urology() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("urology")
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
                    <h1 className="depMainText">Urology</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">Urology Department</h1>
                        <div className="depDetailAbout">
                            Urology is a part of health care that deals with
                            diseases of the male and female urinary tract
                            (kidneys, ureters, bladder and urethra). It also
                            deals with the male organs that are able to make
                            babies (penis, testes, scrotum, prostate, etc.).
                            Since health problems in these body parts can happen
                            to everyone, urologic health is important.
                        </div>
                        <p className="depDetailPara">
                            The scope of organs under Urology include kidneys,
                            adrenal glands, ureters, urinary bladder, and
                            urethra.
                        </p>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/urology.jpg"
                            alt="Urology"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Due to the multi-faceted nature of urology, our
                        physicians also boast exceptional knowledge in
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
                        Physicians at Osra Hospital have excellent knowledge
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

export default Urology;
