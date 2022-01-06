import React from "react";
import "./departments.css";
const treatmentsOffered = [
  {
    name: "Ophthalmoscope",
    detail: "",
    logo: "",
  },
  {
    name: "Retino-scope",
    detail: "",
    logo: "",
  },
  {
    name: "Refraction",
    detail: "",
    logo: "",
  },
  {
    name: "Orthopedic Trauma",
    detail: "",
    logo: "",
  },
  {
    name: "Close & Open reduction procedures",
    detail: "",
    logo: "",
  },
  {
    name: "Plaster cast (POP)",
    detail: "",
    logo: "",
  },
  {
    name: "Open reduction & internal fixation",
    detail: "",
    logo: "",
  },
  {
    name: "Tendon repair",
    detail: "",
    logo: "",
  },
  {
    name: "Reduction of Joint dislocation",
    detail: "",
    logo: "",
  },
  {
    name: "Orthopedic joint reconstruction Surgery",
    detail: "",
    logo: "",
  },
  {
    name: "Arthroplasty",
    detail: "",
    logo: "",
  },
  {
    name: "Sports Injury",
    detail: "",
    logo: "",
  },
];

function Ophthalmology() {
  return (
    <div className="departments">
      <div className="depMainBack">
        <img
          className="depMainImg"
          src="/assets/department/depMain.jpg"
          alt="department Back"
        />
        <div className="depMainOverlay">
          <h1 className="depMainText">Ophthalmology</h1>
        </div>
      </div>

      <div className="depDetail">
        <div className="depDetailContainer">
          <div className="depTextHead">
            <h1 className="depDetailTitle">Ophthalmology Department</h1>
            <div className="depDetailAbout">
              Ophthalmology is a branch of medicine dealing with the diagnosis,
              treatment and prevention of diseases of the eye and visual system.
              The eye, its surrounding structures and the visual system can be
              affected by a number of clinical conditions.
              <br />
              <br />A general practice doctor may refer someone to an
              ophthalmologist if they show symptoms of cataracts, eye
              infections, optic nerve problems, or other eye conditions.
            </div>
          </div>
          <div className="depImgWrapper">
            <img
              className="depDetailImg"
              src="/assets/images/ophthalmology.jpg"
              alt="ophthalmology"
            />
          </div>
        </div>
      </div>

      <div className="treatmentDetails">
        <div className="depMain">
          <h1 className="depMainHead">Treatments Offered</h1>
          <p className="depMainPara">
            The Ophthalmology clinic is specialized in :
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
            Our team of ophthalmologists skillfully combine pioneering
            technology with extensive expertise to provide you with safe and
            effective eye care.
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

export default Ophthalmology;
