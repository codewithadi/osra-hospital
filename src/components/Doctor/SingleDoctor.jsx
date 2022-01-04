import React from "react";
import "./doctor.css";

const SingleDoctor = () => {
    return (
        <div className="depDoctorCard1">
            <div className="depDoctorImg1">
                <img
                    className="doctorImg1"
                    src="/assets/department/doctor1.jpg"
                    alt="anyimg"
                />
            </div>
            <h2 className="depDoctorName1">Kathy Cruse</h2>
            <p className="depDoctorAbout1">Head Of Department</p>
            <p className="depDoctorMob1"> +00 0000 0000 00</p>
            <p className="depDoctorMail1">roberto@medwise.com</p>
            <div className="depBtnWrapper1">
                <a className="depDoctorBtn1" href="/departments">
                    View Profile
                </a>
            </div>
        </div>
    );
};

export default SingleDoctor;
