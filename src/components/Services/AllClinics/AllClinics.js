import React from "react";
import { Link } from "react-router-dom";
import { demoClinic } from "../../DemoData/democlinic";
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
                    No more illness!! We assure you! We care for your healthy
                    well being. When health is at stake.
                </p>
                <div className="depLine"></div>
            </div>
            <div className="depContainer">
                {demoClinic.map((clinic, index) => (
                    <Link to={clinic.linkto} key={index} className="depCard">
                        <div className="depIcon">
                            <img
                                className="depIconImg"
                                src={clinic.imgurl}
                                alt="dept"
                            />
                        </div>
                        <h1 className="depHead">{clinic.name}</h1>
                        {/* <h3 className='depAbout'>Operations & surgeries</h3> */}
                        <p className="depDetailHome">{clinic.desc}</p>
                        <Link
                            onClick={scrollToTop}
                            to={clinic.linkto}
                            className="depLink"
                        >
                            Get Details..
                        </Link>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AllClinics;
