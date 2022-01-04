import React from "react";
import { Link } from "react-router-dom";
import "./department.css";

function AllClinics() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="department py-6">
            <div className="depMain">
                <h1 className="depMainHead">Hospital Clinics</h1>
                <p className="depMainPara">
                    There live the blind texts separated they right at the coast
                    of the Semantics.
                </p>
                <div className="depLine"></div>
            </div>
            <div className="depContainer">
                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/surgery.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">General Surgery</h1>
                    {/* <h3 className='depAbout'>Operations & surgeries</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/general-sergery"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/EarNoseThroat.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Ear, Nose & Throat</h1>
                    {/* <h3 className='depAbout'>Neuro Disorders</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/ear-nose-throat"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/bones.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Ophthalmology</h1>
                    {/* <h3 className='depAbout'>Skin Problems</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/ophthalmology"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/Urology.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Urology</h1>
                    {/* <h3 className='depAbout'>Medicine & Pharmacy</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/urology"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/neurology.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Neuro</h1>
                    {/* <h3 className='depAbout'>Research & Lab</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/neuro"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/Pshyciatric.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Pshyciatric</h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/pshyciatric"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/Bariatic.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Bariatic Surgery</h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/bariatic-surgery"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/Pediatrics.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Pediatrics</h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/pediatrics"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/ob.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">OB/Gyne</h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/ob-gyne"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/physio.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Physiotherapist </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/physiotherapist"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/dentist.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Dentistry </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/dentistry"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/radio.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Radiologic </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/radiologic"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/derma.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Dermatology </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/dermatology"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/gas.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Gastroenterology </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/gastroenterology"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/er.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">ER </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/er"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/die.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Dietitian </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/dietitian"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/cardio.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">
                        Cardiologist and internal medicine{" "}
                    </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/cardiologist-and-internal-medicine"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/ortho.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Orthopedics </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/orthopedics"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/labd.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Laboratory </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/laboratory"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/sero.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Serology </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/serology"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>

                <div className="depCard">
                    <div className="depIcon">
                        <img
                            className="depIconImg"
                            src="assets/department/special.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Special Tests </h1>
                    {/* <h3 className='depAbout'>Bones & Joints</h3> */}
                    <p className="depDetailHome">
                        Behind the word mountains, far from the countries
                        Vokalia.
                    </p>
                    <Link
                        onClick={scrollToTop}
                        to="/clinics/special-tests"
                        className="depLink"
                    >
                        Get Details..
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AllClinics;
