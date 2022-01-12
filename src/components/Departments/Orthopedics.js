import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";


function Orthopedics({ t }) {

    const treatmentsOffered = [
        {
            name: `${t("Ortho1.one")}`,
            detail: "",
            logo: "",
        },
        {
            name:`${t("Ortho1.two")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("Ortho1.three")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("Ortho1.four")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("Ortho1.five")}`,
            detail: "",
            logo: "",
        },
        {
            name:`${t("Ortho1.six")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("Ortho1.seven")}`,
            detail: "",
            logo: "",
        },
        {
            name: `${t("Ortho1.eight")}`,
            detail: "",
            logo: "",
        },
    ];
    
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
                        {t("Ortho1.title")}
                        </h1>
                        <div className="depDetailAbout">
                        {t("Ortho1.body1")}
                        <br/>
                        <br/>
                        {t("Ortho1.body2")}
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
                    <h1 className="depMainHead">
                    {t("Ortho1.Treatmenthead")}
                    </h1>
                    <p className="depMainPara">
                    {t("Ortho1.Treatmentbody")}
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
          <h1 className="depBannerHead">Get the Best Ortho1Treatment</h1>
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

export default withTranslation()(Orthopedics);
