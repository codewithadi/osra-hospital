import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";

const treatmentsOffered = [
    {
        name: "Gastric Bypass",
        detail: "",
        logo: "",
    },
    {
        name: "Gastric Banding",
        detail: "",
        logo: "",
    },
    {
        name: "Gastrostomy Sleeve",
        detail: "",
        logo: "",
    },
    {
        name: "Tumor operations",
        detail: "",
        logo: "",
    },
    {
        name: "All types of obesity operations (re-obesity and morbid obesity)",
        detail: "",
        logo: "",
    },
    {
        name: "Laparoscopic sleeve gastrectomy",
        detail: "",
        logo: "",
    },
    {
        name: "SADI operation",
        detail: "",
        logo: "",
    },
    {
        name: "SASI process",
        detail: "",
        logo: "",
    },
    {
        name: "Oncology surgery",
        detail: "",
        logo: "",
    },
    {
        name: "General surgeries",
        detail: "",
        logo: "",
    },
    {
        name: "Mini gastric bypass",
        detail: "",
        logo: "",
    },
];

function BariaticSurgery() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("bariatric")
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
                    <h1 className="depMainText">Bariatric Surgery</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">
                            Bariatric Surgery Department
                        </h1>
                        <div className="depDetailAbout">
                            Exercise and diet alone often fails to effectively
                            treat people with extreme and excessive obesity.
                            Bariatric surgery is an operation that is performed
                            in order to help such individuals lose weight.
                            Evidence suggests that bariatric surgery may lower
                            death rates for patients with severe obesity,
                            especially when coupled with healthy eating and
                            lifestyle changes after surgery.
                            <br />
                            <br />
                            These surgeries generally pose major risks and side
                            effects and the patient has to make changes to their
                            diet permanently and also schedule a fixed exercise
                            regime so that they can ensure the lasting success
                            of bariatric surgeries.
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

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our department of Bariatric Surgery is dedicated to
                        exceeding expectations. We provide cutting edge
                        treatment
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
                                        className=""
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
                        Our Bariatic surgeon at Osra Hospital you may know:
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

export default BariaticSurgery;
