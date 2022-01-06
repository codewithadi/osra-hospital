import React from "react";
import "./departments.css";

const treatmentsOffered = [
  {
    name: "Incision biopsy",
    detail: "",
    logo: "",
  },
  {
    name: "Excision",
    detail: "",
    logo: "",
  },
  {
    name: "FNAC",
    detail: "",
    logo: "",
  },
  {
    name: "Diagnostic Laparoscopy",
    detail: "",
    logo: "",
  },
  {
    name: "Procto-sigmoidoscopy",
    detail: "",
    logo: "",
  },
  {
    name: "Appendectomy",
    detail: "",
    logo: "",
  },
  {
    name: "Inguinal, Umbilical and Femoral Hernioplasty",
    detail: "",
    logo: "",
  },
  {
    name: "Peritonitis",
    detail: "",
    logo: "",
  },
  {
    name: "Ascities",
    detail: "",
    logo: "",
  },
  {
    name: "Peptic ulcer perforation",
    detail: "",
    logo: "",
  },
  {
    name: "Masterctomy",
    detail: "",
    logo: "",
  },
  {
    name: "Colorectal Surgery",
    detail: "",
    logo: "",
  },
  {
    name: "Laparotomy",
    detail: "",
    logo: "",
  },
  {
    name: "Bowel resection anastomsis",
    detail: "",
    logo: "",
  },
  {
    name: "Stoma creation and take down",
    detail: "",
    logo: "",
  },
  {
    name: "Exploratory lapatotomy",
    detail: "",
    logo: "",
  },
];

function Gen_surgery() {
  return (
    <div className="departments">
      <div className="depMainBack">
        <img
          className="depMainImg"
          src="/assets/department/depMain.jpg"
          alt="department Back"
        />
        <div className="depMainOverlay">
          <h1 className="depMainText">General Surgery</h1>
        </div>
      </div>

      <div className="depDetail">
        <div className="depDetailContainer">
          <div className="depTextHead">
            <h1 className="depDetailTitle">General Surgery Department</h1>
            <div className="depDetailAbout">
              General surgery is a surgical specialty that focuses on abdominal
              contents including the esophagus, stomach, small intestine, large
              intestine, liver, pancreas, gallbladder, appendix and bile ducts,
              and often the thyroid gland.
              <br />
              <br />
              General surgery are deal with diseases involving the skin, breast,
              soft tissue, trauma, Peripheral artery disease and hernias and
              perform endoscopic procedures such as gastroscopy and colonoscopy.
            </div>
          </div>
          <div className="depImgWrapper">
            <img
              className="depDetailImg"
              src="/assets/images/generalsurgery.jpg"
              alt="Gen_surgery"
            />
          </div>
        </div>
      </div>

      <div className="treatmentDetails">
        <div className="depMain">
          <h1 className="depMainHead">Treatments Offered</h1>
          <p className="depMainPara">
          We use cutting edge technology to execute a wide range of general surgeries, including:
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
                  <img src="/assets/dr/check.png" alt="check" />
                </div>
                <div className="treatmentText">
                  <h2 className="treatmentTitle">{item.name}</h2>
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
          Our extensively trained, certified surgeons a use state-of-the art equipment to achieve your desired healthcare results
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

      <div className="depBanner">
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
      </div>
    </div>
  );
}

export default Gen_surgery;
