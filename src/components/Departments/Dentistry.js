import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
const treatmentsOffered = [
    {
        name: "Laboratory investigations include blood hematology",
        detail: "",
        logo: "",
    },
    {
        name: "Periapical x-ray, panoramic , CT scan.",
        detail: "",
        logo: "",
    },
    {
        name: "Excision biopsy",
        detail: "",
        logo: "",
    },
    {
        name: "Oral hygiene instruction.",
        detail: "",
        logo: "",
    },
    {
        name: "Root Canals treatment",
        detail: "",
        logo: "",
    },
    {
        name: "Cosmetic fillings",
        detail: "",
        logo: "",
    },
    {
        name: "Oral hygiene instruction.",
        detail: "",
        logo: "",
    },
    {
        name: "Root Canals treatment",
        detail: "",
        logo: "",
    },
    {
        name: "Cosmetic fillings",
        detail: "",
        logo: "",
    },
    {
        name: "Tooth extraction",
        detail: "",
        logo: "",
    },
    {
        name: "Removable prosthodontics",
        detail: "",
        logo: "",
    },
    {
        name: "Fixed prosthodontice",
        detail: "",
        logo: "",
    },
    {
        name: "Gum treatment",
        detail: "",
        logo: "",
    },
    {
        name: "Orthodontics",
        detail: "",
        logo: "",
    },
];

function Dentistry() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("dentist")
    );
    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/dentistimg.jpg"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">Dentistry</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">Dentistry Department</h1>
                        <div className="depDetailAbout">
                            Dentistry, the profession concerned with the
                            prevention and treatment of oral disease, including
                            diseases of the teeth and supporting structures and
                            diseases of the soft tissues of the mouth.
                            <br />
                            <br />
                            Dentistry is one of the best open access journals
                            that aims to publish the most complete and reliable
                            source of information on discoveries and current
                            developments in the mode of original articles,
                            review articles, case reports, short communications,
                            etc. in this field and provide online access without
                            any restrictions or subscriptions to researchers
                            worldwide.
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/dentistry.jpg"
                            alt="Dentistry"
                        />
                    </div>
                </div>
            </div>
            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our Dermatology Department is dedicated to exceeding
                        expectations. We provide cutting edge treatment
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
                    <p className="depMainPara">Doctors in Dermatology are</p>
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

export default Dentistry;
