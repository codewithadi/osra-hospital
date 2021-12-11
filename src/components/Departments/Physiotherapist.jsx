import React from "react";
import "./departments.css";

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
              A physiotherapist works with patients to develop customized
              programs designed to restore as much as possible their functional
              ability and movement. They are trained to help patients at all
              stages of life — from infant to old age — whose function and
              movement are impacted by: Disease Health conditions,Injury,
              Environmental factors,Aging Disorders and weight issues.
            </div>
            <p className="depDetailPara">
              Physiotherapists have in-depth knowledge of how the body works and
              specialized hands-on clinical skills to assess, diagnose, and
              treat symptoms of illness, injury and disability. Physiotherapy
              includes rehabilitation, as well as prevention of injury, and
              promotion of health and fitness. Physiotherapists often work in
              teams with other health professionals to help meet an individual's
              health care needs.
            </p>
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
            There live the blind texts separated they right at the coast of the
            Semantics.
          </p>
          <div className="depLine"></div>
        </div>

        <div className="treatmentWrapper">
          <div className="treatmentCard">
            <div className="treatmentLogo">
              <img src="/assets/department/surgery.png" alt="anyimg" />
            </div>
            <div className="treatmentText">
              <h2 className="treatmentTitle">Treating orthopedic and neurological diseases</h2>
              <p className="treatmentAbout">
                Dunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="treatmentCard">
            <div className="treatmentLogo">
              <img src="/assets/department/surgery.png" alt="anyimg" />
            </div>
            <div className="treatmentText">
              <h2 className="treatmentTitle">Sports injury rehabilitation</h2>
              <p className="treatmentAbout">
                Dunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="treatmentCard">
            <div className="treatmentLogo">
              <img src="/assets/department/surgery.png" alt="anyimg" />
            </div>
            <div className="treatmentText">
              <h2 className="treatmentTitle">Thromboembolism treatment</h2>
              <p className="treatmentAbout">
                Dunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="treatmentCard">
            <div className="treatmentLogo">
              <img src="/assets/department/surgery.png" alt="anyimg" />
            </div>
            <div className="treatmentText">
              <h2 className="treatmentTitle">Rehabilitation of handicapped children</h2>
              <p className="treatmentAbout">
                Dunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="treatmentCard">
            <div className="treatmentLogo">
              <img src="/assets/department/surgery.png" alt="anyimg" />
            </div>
            <div className="treatmentText">
              <h2 className="treatmentTitle">Facial nerve treatment</h2>
              <p className="treatmentAbout">
                Dunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
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
