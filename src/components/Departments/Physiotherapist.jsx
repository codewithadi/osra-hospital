import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";


function Physiotherapist({t}) {
    const treatmentsOffered = [
        {
            name:   `${t("psyo.tm1")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("psyo.tm2")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("psyo.tm3")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("psyo.tm4")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("psyo.tm5")}`,
            detail: "",
            logo: "",
        },
    ];
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("physiotherapist")
    );
    return (
        <div className="departments">
            <div className="depMainBack">
                <img
                    className="depMainImg"
                    src="/assets/department/Physiotherapy-Header.jpg"
                    alt="department Back"
                />
                <div className="depMainOverlay">
                    <h1 className="depMainText">  {t("psyo.head")}</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">
                        {t("psyo.head")}
                        </h1>
                        <div className="depDetailAbout">
                        {t("psyo.para1")}
                        </div>
                        {/* <p className="depDetailPara">
              Physiotherapists have in-depth knowledge of how the body works and
              specialized hands-on clinical skills to assess, diagnose, and
              treat symptoms of illness, injury and disability. Physiotherapy
              includes rehabilitation, as well as prevention of injury, and
              promotion of health and fitness. Physiotherapists often work in
              teams with other health professionals to help meet an individual's
              health care needs.
            </p> */}
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/Physiotherapist.jpg"
                            alt="Physiotherapist"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">{t("to")}</h1>
                    <p className="depMainPara">
                    {t("psyo.topara")}
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

export default withTranslation()(Physiotherapist);
