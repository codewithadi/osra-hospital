import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
import { withTranslation } from "react-i18next";

function BariaticSurgery({ t }) {
    const treatmentsOffered = {
        TherapeuticModalities: [
            {
                name: `${t("bari.tm1")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm2")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm3")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm4")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm5")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm6")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm7")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm8")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm9")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm10")}`,
                detail: "",
                logo: "",
            },
            {
                name: `${t("bari.tm11")}`,
                detail: "",
                logo: "",
            },
        ],
    };
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("bariatic")
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
                    <h1 className="depMainText">{t("bari.head")}</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">{t("bari.head")}</h1>
                        <div className="depDetailAbout">
                            {t("bari.para1")}
                            {/* <br />
                            <br />
                            {t("bari.para2")} */}
                        </div>
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/bariatric.jpg"
                            alt="bariatric"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">{t("to")}</h1>
                    <p className="depMainPara">{t("bari.tohe")}</p>
                    <div className="depLine"></div>
                </div>

                <div className="treatmentWrapper">
                    <h1 className="depMainHead">{t("tm")} :</h1>
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
            </div> */}

            <div className="depDoctors">
                <div className="depMain">
                    <h1 className="depMainHead">{t("depdoc")}</h1>
                    {/* <p className="depMainPara">
                        Our Bariatic surgeon at Osra Hospital you may know:
                    </p> */}
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
            <a
              className="depBannerBtn"
              href="/contact"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div> */}
        </div>
    );
}

export default withTranslation()(BariaticSurgery);
