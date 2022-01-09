import React from "react";
import { Link } from "react-router-dom";
import "../Departments/departments.css";
import { useLocation } from "react-router-dom";
import { demoData } from "../DemoData/demodata";

const Profile = () => {
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const singleDoc = demoData.filter(
        (data) => data.linkto === splitLocation[2]
    );

    return (
        <>
            {singleDoc.map((doc) => (
                <div className="departments">
                    <div className="depDetail">
                        <div className="depDetailContainer">
                            <div className="drTextHead">
                                <div className="drDetailAbout8">
                                    <div className="my-24 ml-10">
                                        <div className="my-2 flex">
                                            <img
                                                className="w-7 h-6"
                                                src="/assets/dr/map.png"
                                                alt="data"
                                            />
                                            <h4 className="text-lg mx-1">
                                                {doc.Nationality}
                                            </h4>
                                        </div>
                                        <h2 className="text-4xl font-semibold">
                                            {doc.name}
                                        </h2>
                                        <h4 className="mt-4">{doc.position}</h4>
                                        <div className="mt-20">
                                            <h5 className="flex mb-2">
                                                Qualification :
                                                <p className="ml-1">
                                                    {doc.Qualification}
                                                </p>
                                            </h5>
                                            {!doc.License < 1 && (
                                                <h5 className="flex flex-col mb-2">
                                                    License :
                                                    {doc.License.map((lic) => (
                                                        <>
                                                            <p className="ml-3">
                                                                {lic}
                                                            </p>
                                                        </>
                                                    ))}
                                                </h5>
                                            )}
                                            <h4 className="flex">
                                                Years of experience :{" "}
                                                <p className="ml-1">
                                                    {doc.Experience}
                                                </p>
                                            </h4>
                                        </div>
                                        <button className="border-white border-2 px-4 py-2 rounded-full mt-4 transition-all duration-500 hover:bg-white hover:text-black">
                                            <Link to="/appointment">
                                                Book An Appointment
                                            </Link>
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
                            <h1 className="depMainHead">Procedures</h1>
                            <div className="depLine"></div>
                        </div>

                        <div className="treatmentWrapper">
                            {doc.skills.map((skill, index) => (
                                <div className="treatmentCard" key={index}>
                                    <div className="checkLogo">
                                        <img
                                            src="/assets/dr/customcheck.jpg"
                                            alt="check"
                                        />
                                    </div>
                                    <div className="treatmentText">
                                        <h2 className="drskillTitle">
                                            {skill}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Profile;
