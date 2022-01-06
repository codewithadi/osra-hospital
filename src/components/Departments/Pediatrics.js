import React from "react";
import "./departments.css";
const treatmentsOffered = [
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
];

function Pediatrics() {
  return (
    <div className="departments">
      <div className="depMainBack">
        <img
          className="depMainImg"
          src="/assets/department/depMain.jpg"
          alt="department Back"
        />
        <div className="depMainOverlay">
          <h1 className="depMainText">Pediatrics</h1>
        </div>
      </div>

      <div className="depDetail">
        <div className="depDetailContainer">
          <div className="depTextHead">
            <h1 className="depDetailTitle">Pediatrics Department</h1>
            <div className="depDetailAbout">
              A paediatrician is a child's physician who provides not only
              medical care for children who are acutely or chronically ill but
              also preventive health services for healthy children. A
              paediatrician manages physical, mental, and emotional well-being
              of the children under their care at every stage of development, in
              both sickness and health.
              <br />
              <br />
              Pediatrics is the branch of medicine dealing with the health and
              medical care of infants, children, and adolescents from birth up
              to the age of 18.
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
          Dedicated to providing children under 14 years of age with the highest quality of care in a comforting environment, the Pediatrics department at Osra Hospital is one of the most trusted in the region.
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
          Specialist paediatrician in pediatrics department are
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

export default Pediatrics;
