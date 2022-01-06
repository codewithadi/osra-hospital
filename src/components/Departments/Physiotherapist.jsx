import React from "react";
import "./departments.css";
const treatmentsOffered = [
  {
    name: "Treating orthopedic and neurological diseases",
    detail: "",
    logo: "",
  },
  {
    name: "Sports injury rehabilitation",
    detail: "",
    logo: "",
  },
  {
    name: "Thromboembolism treatment",
    detail: "",
    logo: "",
  },
  {
    name: "Rehabilitation of handicapped children",
    detail: "",
    logo: "",
  },
  {
    name: "Facial nerve treatment",
    detail: "",
    logo: "",
  },
];

function Physiotherapist() {
  return (
    <div className="departments">
      <div className="depMainBack">
        <img
          className="depMainImg"
          src="/assets/department/depMain.jpg"
          alt="department Back"
        />
        <div className="depMainOverlay">
          <h1 className="depMainText">Physiotherapist</h1>
        </div>
      </div>

      <div className="depDetail">
        <div className="depDetailContainer">
          <div className="depTextHead">
            <h1 className="depDetailTitle">Physiotherapist Department</h1>
            <div className="depDetailAbout">
              Healthcare profession concerned with the assessment, maintenance,
              and restoration of the physical function and performance of the
              body by physical trainers.
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
          <h1 className="depMainHead">Treatments Offered</h1>
          <p className="depMainPara">
            Our department of Psychiatry is dedicated to exceeding expectations.
            We provide cutting edge treatment of disorders below
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
            There live the blind texts separated they right at the coast of the
            Semantics.
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

export default Physiotherapist;
