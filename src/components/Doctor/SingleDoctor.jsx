import React from "react";
import { Link } from "react-router-dom";
import "./doctor.css";

const scrollToTop = () => {
    window.scrollTo(0, 0);
};

const SingleDoctor = ({
    imgUrl,
    name,
    position,
    namear,
    positionar,
    mobno,
    email,
    linkto,
}) => {
    return (
        <div className="depDoctorCard1">
            <div className="depDoctorImg1">
                <img className="doctorImg1" src={imgUrl} alt="anyimg" />
            </div>
            {/* <h2 className="depDoctorName1">{namear}</h2>
            <p className="depDoctorAbout1">{positionar}</p> */}
            <h2 className="depDoctorName1">{name}</h2>
            <p className="depDoctorAbout1">{position}</p>
            {/* <p className="depDoctorMob1">{mobno}</p>
            <p className="depDoctorMail1">{email}</p> */}
            <div className="depBtnWrapper1">
                <Link
                    onClick={scrollToTop}
                    className="depDoctorBtn1"
                    to={`/doctor/${linkto}`}
                >
                    View Profile
                </Link>
                <Link
                    onClick={scrollToTop}
                    className="depDoctorBtn1"
                    to={`/appointment`}
                >
                    Book Appointment
                </Link>
            </div>
        </div>
    );
};

export default SingleDoctor;
