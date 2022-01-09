import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./About.css";

const BrandSlider = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 4 },
    };

    const items = [
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/radiology.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Radiology</h1>
                    <p className="depDetailHome">
                        Radiology is a medical specialty that uses imaging to
                        diagnose and treat diseases seen within the body. ...
                        The radiology department may also be called the X-ray or
                        imaging department
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/lab.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Laboratory</h1>
                    <p className="depDetailHome">
                        Where tests are carried out on clinical specimens to
                        obtain information about the health of a patient to aid
                        in diagnosis, treatment, and prevention of disease
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/physio.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Physiotherapy</h1>
                    <p className="depDetailHome">
                        Healthcare profession concerned with the assessment,
                        maintenance, and restoration of the physical function
                        and performance of the body by physical trainers.
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/opc.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Out-Patient Clinics</h1>
                    <p className="depDetailHome">
                        An outpatient department or outpatient clinic is the
                        part of a hospital designed for the treatment of
                        outpatients.
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/ip.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">In-Patient</h1>
                    <p className="depDetailHome">
                        Inpatient care requires overnight hospitalization.
                        Patients must stay at the medical facility where their
                        procedure was done
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/hc.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Home care</h1>
                    <p className="depDetailHome">
                        Skilled care delivered directly to a patient's home.
                        This type of care is provided by licensed medical
                        professionals including nurses, therapists, and aides
                        for the purpose of treating or managing an illness,
                        injury, or medical condition.
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/radiology.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Operations(OR)</h1>
                    <p className="depDetailHome">
                        The operating room, sometimes called the OR or surgery
                        center, is where surgery (say: SUR-juh-ree) takes place
                        in a hospital.
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/delivery.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Delivery</h1>
                    <p className="depDetailHome">
                        The care and treatment of women in childbirth and during
                        the period before and after delivery. of or relating to
                        childbirth or obstetrics.
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/phar.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">Pharmacy</h1>
                    <p className="depDetailHome">
                        Hospital pharmacists are experts in medicines who work
                        as part of multidisciplinary healthcare teams to manage
                        the use of medicines in hospitals.
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/icu.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">ICU</h1>
                    <p className="depDetailHome">
                        ICU unit in a hospital providing intensive care for
                        critically ill or injured patients that is staffed by
                        specially trained medical personnel and has equipment
                        that allows for continuous monitoring and life support
                        —abbreviation ICU. — called also critical care unit.
                    </p>
                </div>
            </div>
        </div>,
        <div className="p-2">
            <div className="border-2 rounded" data-value="1">
                <div className="adepCard">
                    <div className="adepIcon">
                        <img
                            className="adepIconImg"
                            src="/assets/departmentlogos/er.png"
                            alt="dept"
                        />
                    </div>
                    <h1 className="depHead">ER</h1>
                    <p className="depDetailHome">
                        A hospital room or area staffed and equipped for the
                        reception and treatment of persons with conditions (as
                        illness or trauma) requiring immediate medical care.
                    </p>
                </div>
            </div>
        </div>,
    ];

    return (
        <div className="bg-gray-200 w-full px-5">
            <div className="p-2 text-center">
                <h2
                    className="mt-12 text-4xl font-medium"
                    style={{ color: "#3f0f1e" }}
                >
                    Hospital Departments
                </h2>
                <p className="text-lg my-4 text-gray-500">
                    Patient care and getting CBAHI Reaccreditation with
                    continues improvement and Enhancement in quality level and
                    provided services
                </p>
                <div className="flex justify-center items-center w-full">
                    <div className="h-1 w-16 bg-blue-500"></div>
                </div>
            </div>
            <div className="relative">
                <AliceCarousel
                    mouseTracking
                    infinite={true}
                    animationDuration={900}
                    paddingLeft={6}
                    paddingRight={6}
                    items={items}
                    autoPlay={true}
                    autoPlayInterval={2000}
                    responsive={responsive}
                    disableDotsControls={true}
                    disableButtonsControls={false}
                    controlsStrategy="default"
                    // renderPrevButton={() => {
                    //     <div className="p-4 absolute left-3 top-3">
                    //         <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             className="h-7 w-7"
                    //             viewBox="0 0 20 20"
                    //             fill="currentColor"
                    //         >
                    //             <path
                    //                 fillRule="evenodd"
                    //                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    //                 clipRule="evenodd"
                    //             />
                    //         </svg>
                    //     </div>;
                    // }}
                    // renderNextButton={() => {
                    //     <div className="p-4 absolute right-3 top-3">
                    //         <svg
                    //             xmlns="http://www.w3.org/2000/svg"
                    //             className="h-7 w-7"
                    //             viewBox="0 0 20 20"
                    //             fill="currentColor"
                    //         >
                    //             <path
                    //                 fillRule="evenodd"
                    //                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    //                 clipRule="evenodd"
                    //             />
                    //         </svg>
                    //     </div>;
                    // }}
                />
            </div>
        </div>
    );
};

export default BrandSlider;
