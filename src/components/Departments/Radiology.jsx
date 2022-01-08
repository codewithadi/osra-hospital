import React from "react";
import "./departments.css";
import { demoData } from "../DemoData/demodata";
import SingleDoctor from "../Doctor/SingleDoctor";
const treatmentsOffered = [
    {
        name: "CT scan Procedures",
        detail: "",
        logo: "",
    },
    {
        name: "Ultrasound",
        detail: "",
        logo: "",
    },
    {
        name: "Xray",
        detail: "",
        logo: "",
    },
];

function Radiology() {
    const filterdDoc = demoData.filter((data) =>
        data.department.includes("pshyciatric")
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
                    <h1 className="depMainText">Radiology</h1>
                </div>
            </div>

            <div className="depDetail">
                <div className="depDetailContainer">
                    <div className="depTextHead">
                        <h1 className="depDetailTitle">Radiology Department</h1>
                        <div className="depDetailAbout">
                            Radiology is a medical specialty that uses imaging
                            to diagnose and treat diseases seen within the body.
                            ... The radiology department may also be called the
                            X-ray or imaging department
                        </div>
                        {/* <p className='depDetailPara'>Diagnostic radiologists use a variety of imaging procedures to see inside the body and assess or diagnose the patient’s condition. Your radiologist plays an important role in your health by acting as an expert consultant to your referring physician (the doctor who sent you for testing) by providing assistance in choosing the proper exam and directing radiology technologists (those who operate the equipment) in properly performing quality exams. </p> */}
                    </div>
                    <div className="depImgWrapper">
                        <img
                            className="depDetailImg"
                            src="/assets/images/radiology1.png"
                            alt="radiology"
                        />
                    </div>
                </div>
            </div>

            <div className="treatmentDetails">
                <div className="depMain">
                    <h1 className="depMainHead">Treatments Offered</h1>
                    <p className="depMainPara">
                        Our Radiology Department is dedicated to exceeding
                        expectations. We provide cutting edge technology
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
                        Our expert team of radiologists specializes
                    </p>
                    <div className="depLine"></div>
                </div>
                <div className="depDoctorWrapper">
                    <div className="depDoctorCard">
                        <div className="depDoctorImg">
                            <img
                                className="doctorImg"
                                src="/assets/department/doctor1.jpg"
                                alt="anyimg"
                            />
                        </div>
                        <h2 className="depDoctorName">David Paulson</h2>
                        <p className="depDoctorAbout">Head Of Department</p>
                        <p className="depDoctorMob"> +00 0000 0000 00</p>
                        <p className="depDoctorMail">roberto@medwise.com</p>
                        <div className="depBtnWrapper">
                            <a className="depDoctorBtn" href="/departments">
                                View Profile
                            </a>
                        </div>
                    </div>

                    <div className="depDoctorCard">
                        <div className="depDoctorImg">
                            <img
                                className="doctorImg"
                                src="/assets/department/doctor2.jpg"
                                alt="anyimg"
                            />
                        </div>
                        <h2 className="depDoctorName">Merri Hoffman</h2>
                        <p className="depDoctorAbout">Head Of Department</p>
                        <p className="depDoctorMob"> +00 0000 0000 00</p>
                        <p className="depDoctorMail">roberto@medwise.com</p>
                        <div className="depBtnWrapper">
                            <a className="depDoctorBtn" href="/departments">
                                View Profile
                            </a>
                        </div>
                    </div>

                    <div className="depDoctorCard">
                        <div className="depDoctorImg">
                            <img
                                className="doctorImg"
                                src="/assets/department/doctor1.jpg"
                                alt="anyimg"
                            />
                        </div>
                        <h2 className="depDoctorName">Kathy Cruse</h2>
                        <p className="depDoctorAbout">Head Of Department</p>
                        <p className="depDoctorMob"> +00 0000 0000 00</p>
                        <p className="depDoctorMail">roberto@medwise.com</p>
                        <div className="depBtnWrapper">
                            <a className="depDoctorBtn" href="/departments">
                                View Profile
                            </a>
                        </div>
                    </div>

                    <div className="depDoctorCard">
                        <div className="depDoctorImg">
                            <img
                                className="doctorImg"
                                src="/assets/department/doctor2.jpg"
                                alt="anyimg"
                            />
                        </div>
                        <h2 className="depDoctorName">Floyd Birdsong</h2>
                        <p className="depDoctorAbout">Head Of Department</p>
                        <p className="depDoctorMob"> +00 0000 0000 00</p>
                        <p className="depDoctorMail">roberto@medwise.com</p>
                        <div className="depBtnWrapper">
                            <a className="depDoctorBtn" href="/departments">
                                View Profile
                            </a>
                        </div>
                    </div>
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
            <a className="depBannerBtn" href="/contact">
              Contact Us Now
            </a>
          </div>
        </div>
      </div> */}
        </div>
    );
}

export default Radiology;
