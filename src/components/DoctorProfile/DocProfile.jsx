import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Departments/departments.css";
import { useLocation } from "react-router-dom";
import { demoData } from "../DemoData/demodata";
import { demoDatas } from "../DemoData/demodatas";
import { withTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

const DocProfile = ({ t }) => {
    const [doctors, setDoctors] = useState();
    const [loading, setloading] = useState(true);
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const singleDoc = demoData.filter(
        (data) => data.linkto === splitLocation[2]
    );
    const singleDocar = demoDatas.filter(
        (data) => data.linkto === splitLocation[2]
    );

    useEffect(() => {
        setloading(true);
        const getDept = () => {
            const language = localStorage.getItem("language");
            console.log(language === "ar");
            if (language === "ar") {
                console.log("ar");
                setDoctors(singleDocar);
            } else {
                console.log("en");
                setDoctors(singleDoc);
            }

            //setDepartment(demodept);
        };
        getDept();
        setloading(false);
    }, []);

    return (
        <>
            {loading ? (
                <div className="w-full h-full flex justify-center items-center py-4">
                    <Loading />
                </div>
            ) : (
                <div className="flex justify-center py-4">
                    {doctors.map((doc) => (
                        <div className="w-full md:w-5/6 flex flex-col-reverse md:flex-row font-medium">
                            <div
                                className="w-full md:w-2/3 pt-7 px-2 md:px-4"
                                dir={t("directionc")}
                            >
                                <h2 className="text-3xl font-bold text-gray-600">
                                    {doc.namear}
                                </h2>
                                <h4 className="mt-2 mb-5 text-xl text-gray-600">
                                    {doc.positionar}
                                </h4>
                                <div
                                    className="flex gap-4"
                                    style={{ color: "#3c0c1c" }}
                                >
                                    <h4 className="mt-1 text-lg">
                                        {t("docprofile.title")}:
                                    </h4>
                                    <h4 className="mt-1 text-lg">
                                        {doc.positionar}
                                    </h4>
                                </div>
                                <div
                                    className="flex gap-4"
                                    style={{ color: "#3c0c1c" }}
                                >
                                    <h4 className="mt-1 text-lg">
                                        {t("docprofile.name")}:
                                    </h4>
                                    <h4 className="mt-1 text-lg">
                                        {doc.namear}
                                    </h4>
                                </div>
                                <div
                                    className="flex gap-4"
                                    style={{ color: "#3c0c1c" }}
                                >
                                    <h4 className="mt-1 text-lg">
                                        {t("docprofile.pos")}:
                                    </h4>
                                    <h4 className="mt-1 text-lg">
                                        {doc.positionar}
                                    </h4>
                                </div>
                                <div
                                    className="flex gap-4"
                                    style={{ color: "#3c0c1c" }}
                                >
                                    <h4 className="mt-1 text-lg">
                                        {t("docprofile.qual")}:
                                    </h4>
                                    <h4 className="mt-1 text-lg">
                                        {doc.Qualification}
                                    </h4>
                                </div>

                                <div
                                    className="flex gap-4"
                                    style={{ color: "#3c0c1c" }}
                                >
                                    <h4 className="mt-1 text-lg">
                                        {t("docprofile.lic")}:
                                    </h4>
                                    {!doc.License < 1 && (
                                        <div>
                                            {doc.License.map((lic) => (
                                                <h4 className="mt-1 text-lg">
                                                    {lic}
                                                </h4>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="flex gap-4"
                                    style={{ color: "#3c0c1c" }}
                                >
                                    <h4 className="mt-1 text-lg">
                                        {t("docprofile.exp")}:
                                    </h4>
                                    <h4 className="mt-1 text-lg">
                                        {doc.Experience}
                                    </h4>
                                </div>
                                <div
                                    className="flex gap-4"
                                    style={{ color: "#3c0c1c" }}
                                >
                                    <h4 className="mt-1 text-lg">
                                        {t("docprofile.nat")}:
                                    </h4>
                                    <h4 className="mt-1 text-lg">
                                        {doc.Nationality}
                                    </h4>
                                </div>
                                <h4 className="mt-2 text-lg text-gray-600">
                                    {t("docprofile.procedure")}:
                                </h4>
                                {doc.skillsar.map((skill, index) => (
                                    <div className="flex gap-2 text-gray-600">
                                        <h4 className="mt-1 text-lg">
                                            {index + 1}:
                                        </h4>
                                        <h4 className="mt-1 text-lg">
                                            {skill}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full md:w-1/3">
                                <img
                                    className="w-full"
                                    src={doc.imgUrl}
                                    alt="dermatology"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default withTranslation()(DocProfile);
