import React from "react";
import SupportGrid from "./SupportGrid";

const SupportService = () => {
    return (
        <div>
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
                    width: "100%",
                    height: "55vh",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="text-center font-semibold text-white text-4xl md:text-7xl">
                        <h1 className="mb-7">All Departments</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center py-10 px-2 md:px-20">
                <SupportGrid
                    imgUrl="/assets/departmentlogos/radiology.png"
                    title="Radiology"
                    desc="Radiology is a medical specialty that uses imaging to diagnose and treat diseases seen within the body. ... The radiology department may also be called the X-ray or imaging department"
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/lab.png"
                    title="Laboratory"
                    desc="Where tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease"
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/physio.png"
                    title="Physiotherapy"
                    desc="Healthcare profession concerned with the assessment, maintenance, and restoration of the physical function and performance of the body by physical trainers."
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/opc.png"
                    title="Out-Patient Clinics"
                    desc="An outpatient department or outpatient clinic is the part of a hospital designed for the treatment of outpatients"
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/ip.png"
                    title="In-Patient "
                    desc="Inpatient care requires overnight hospitalization. Patients must stay at the medical facility where their procedure was done"
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/or.png"
                    title="Operations (OR) department "
                    desc="The OR consists of individualized rooms with specific equipment for performing surgeries, including robotic systems."
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/hc.png"
                    title="Home care"
                    desc="Skilled care delivered directly to a patient's home. This type of care is provided by licensed medical professionals including nurses, therapists, and aides for the purpose of treating or managing an illness, injury, or medical condition"
                />
                {/* <SupportGrid
                     imgUrl="/assets/departmentlogos/or.png"
                     title="Operations"
                     desc="The operating room, sometimes called the OR or surgery center, is where surgery (say: SUR-juh-ree) takes place in a hospital"
                    /> */}
                <SupportGrid
                    imgUrl="/assets/departmentlogos/delivery.png"
                    title="Delivery"
                    desc="The care and treatment of women in childbirth and during the period before and after delivery. of or relating to childbirth or obstetrics. Abbreviations"
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/icu.png"
                    title="ICU"
                    desc="ICU unit in a hospital providing intensive care for critically ill or injured patients that is staffed by specially trained medical personnel and has equipment that allows for continuous monitoring and life support —abbreviation ICU. — called also critical care unit."
                />
                <SupportGrid
                    imgUrl="/assets/departmentlogos/er.png"
                    title="ER"
                    desc="A hospital room or area staffed and equipped for the reception and treatment of persons with conditions (as illness or trauma) requiring immediate medical care."
                />
            </div>
        </div>
    );
};

export default SupportService;
