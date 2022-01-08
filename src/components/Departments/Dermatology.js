import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";

const treatmentsOffered = [
    {
        name: "Dermatopathology",
        detail: "",
        logo: "",
    },
    {
        name: "Peeling( Chemical Type)",
        detail: "",
        logo: "",
    },
    {
        name: "Cosmetology",
        detail: "",
        logo: "",
    },
    {
        name: "PRP Plastic for hair removal",
        detail: "",
        logo: "",
    },
    {
        name: "Acne treatment",
        detail: "",
        logo: "",
    },
    {
        name: "Skin diseases",
        detail: "",
        logo: "",
    },
    {
        name: "Hyperpigmentation",
        detail: "",
        logo: "",
    },
];

function Dermatology() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("pshyciatric")
    );
    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/14-min.png"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">Dermatology</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">
                            Dermatology Department
                        </h1>
                        <div className="depDetailAbout">
                            Dermatology is the branch of medicine dealing with
                            the skin. It is a speciality with both medical and
                            surgical aspects. A dermatologist is a specialist
                            medical doctor who manages diseases related to skin,
                            hair, nails, and some cosmetic problems.
                            <br /> <br />A dermatologist is a doctor who
                            specializes in conditions involving the skin, hair,
                            and nails. A dermatologist can identify and treat
                            more than 3,000 conditions.
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/dermatology.jpg"
                            alt="dermatology"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our Dermatology Department is dedicated to exceeding
                        expectations. We provide
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

export default Dermatology;
