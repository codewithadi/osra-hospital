import React from "react";
import { Link } from "react-router-dom";
import "../Departments/departments.css";
const skills = [
  "Psychiatric analysis",
  "Personality disorders",
  "Mood disturbances and anxiety",
  "Eating disorders",
  "Sexual function disorders",
  "Adolescent and child disorders such as autism",
  "Language expression disorders",
  "Learning difficulties",
  "Hyperactivity",
];

const Profile = () => {
  return (
    <div className="departments">
      <div className="depDetail">
        <div className="depDetailContainer">
          <div className="drTextHead">
            <div className="drDetailAbout8">
              <div className="my-24 ml-10">
                <div className="my-2 flex">
                  <img className="w-7 h-6" src="/assets/dr/map.png" />
                  <h4 className="text-lg mx-1">Egyptian</h4>
                </div>
                <h2 className="text-4xl font-semibold">Dr. Eman Radwan</h2>
                <h4 className="mt-4">Neuro Psychiatric Specialist</h4>
                <div className="mt-20">
                  <h5 className="flex">
                    Qualification :
                    <p className="ml-1">
                      Master's degree in Psychiatry and neurology
                    </p>
                  </h5>
                  <h4 className="flex">
                    Years of experience : <p className="ml-1">14 years</p>
                  </h4>
                </div>
                <button className="border-white border-2 px-4 py-2 rounded-full mt-4">
                  <Link to="/appointment"> Book An Appointment</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="depImgWrapper">
            <img
              className="depDetailImg"
              src="/assets/dr/drp.jpg"
              alt="dermatology"
            />
          </div>
        </div>
      </div>

      <div className="treatmentDetails">
        <div className="depMain">
          <h1 className="depMainHead">Skills</h1>
          <div className="depLine"></div>
        </div>

        <div className="treatmentWrapper">
          {skills.map((skill, index) => (
            <div className="treatmentCard" key={index}>
              <div className="checkLogo">
                <img src="/assets/dr/check.png" alt="check" />
              </div>
              <div className="treatmentText">
                <h2 className="drskillTitle">{skill}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
