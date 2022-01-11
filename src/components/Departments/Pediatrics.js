import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";

const treatmentsOffered = {
    DiagnosticModalities: [
        {
            name: "Blood sampling",
            detail: "",
            logo: "",
        },
        {
            name: "Pulse oxymetry",
            detail: "",
            logo: "",
        },
        {
            name: "Throat swab and skin swab for Culture and Sensitivity studies",
            detail: "",
            logo: "",
        },
        {
            name: "Arterial blood gas sampling",
            detail: "",
            logo: "",
        },
        {
            name: "Radiological & Laboratory investigation",
            detail: "",
            logo: "",
        },
    ],
    TherapeuticModalities: [
        {
            name: "Intravenous line cannulation",
            detail: "",
            logo: "",
        },
        {
            name: "Intravenous fluid administration",
            detail: "",
            logo: "",
        },
        {
            name: "Gastric lavage",
            detail: "",
            logo: "",
        },
        {
            name: "Naso-gastric tube placement",
            detail: "",
            logo: "",
        },
        {
            name: "Umbilical vein catheterization",
            detail: "",
            logo: "",
        },
        {
            name: "Umbilical artery catheterization",
            detail: "",
            logo: "",
        },
        {
            name: "Neonatal resuscitation",
            detail: "",
            logo: "",
        },
        {
            name: "Phototheraphy",
            detail: "",
            logo: "",
        },
        {
            name: "Chest tube placement",
            detail: "",
            logo: "",
        },
        {
            name: "Conventional mechanical ventilation",
            detail: "",
            logo: "",
        },
        {
            name: "High frequency oscillatory ventilation.",
            detail: "",
            logo: "",
        },
        {
            name: "Management of Neonatal diseases",
            detail: "",
            logo: "",
        },
        {
            name: "Management of Pediatric diseases as DKA, RSV, Bronchopneumonia, convulsions and other diseases.",
            detail: "",
            logo: "",
        },
    ],
};

function Pediatrics() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("pediatrics")
    );
    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/2-min.png"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">Pediatrics</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">
                            Pediatrics Department
                        </h1>
                        <div className="depDetailAbout">
                            A paediatrician is a child's physician who provides
                            not only medical care for children who are acutely
                            or chronically ill but also preventive health
                            services for healthy children. A paediatrician
                            manages physical, mental, and emotional well-being
                            of the children under their care at every stage of
                            development, in both sickness and health.
                            <br />
                            <br />
                            Pediatrics is the branch of medicine dealing with
                            the health and medical care of infants, children,
                            and adolescents from birth up to the age of 18.
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/pediatrics.jpg"
                            alt="pediatrics"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Dedicated to providing children under 14 years of age
                        with the highest quality of care in a comforting
                        environment, the Pediatrics department at Osra Hospital
                        is one of the most trusted in the region.
                    </p>
                    <div className="depLine"></div>
                </div>

                <div className="treatmentWrapper">
                    <h1 className="depMainHead">Diagnostic Modalities :</h1>
                </div>
                <div className="treatmentWrapper">
                    {treatmentsOffered.DiagnosticModalities.map(
                        (item, index) => (
                            <>
                                <div className="treatmentCard" key={index}>
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
                                    </div>
                                </div>
                            </>
                        )
                    )}
                </div>

                <div className="treatmentWrapper">
                    <h1 className="depMainHead">Therapeutic Modalities :</h1>
                </div>
                <div className="treatmentWrapper">
                    {treatmentsOffered.TherapeuticModalities.map(
                        (item, index) => (
                            <>
                                <div className="treatmentCard" key={index}>
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
                                    </div>
                                </div>
                            </>
                        )
                    )}
                </div>
            </div>

            <div className="depDoctors">
                <div className="depMain">
                    <h1 className="depMainHead">Department Doctors</h1>
                    <p className="depMainPara">
                        Specialist paediatrician in pediatrics department are
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

export default Pediatrics;
