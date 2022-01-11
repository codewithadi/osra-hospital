import React from "react";
import { Link } from "react-router-dom";
import "./department.css";

function AllClinics() {
    const demoClinic = [
        {
            name: "Pediatric",
            desc: "A paediatrician is a child's physician who provides not only medical care for children who are acutely or chronically ill but also preventive health services for healthy children.",
            imgurl: "assets/department/Pediatrics.png",
            linkto: "/clinics/pediatrics",
        },
        {
            name: "OB/Gyne",
            desc: "OB-GYNs also historically have more cultural competency training around gender based issues..",
            imgurl: "assets/department/ob.png",
            linkto: "/clinics/ob-gyne",
        },
        {
            name: "Ophthalmology",
            desc: "Ophthalmology is a branch of medicine dealing with the diagnosis, treatment and prevention of diseases of the eye and visual system.",
            imgurl: "assets/department/bones.png",
            linkto: "/clinics/ophthalmology",
        },
        {
            name: "Gastroenterology",
            desc: "Gastroenterology is a medical specialty dealing with the study of the digestive system and its disorders.",
            imgurl: "assets/department/gas.png",
            linkto: "/clinics/gastroenterology",
        },
        {
            name: "Cardiology",
            desc: "Cardiology is the study and treatment of disorders of the heart and the blood vessels.",
            imgurl: "assets/department/cardio.png",
            linkto: "/clinics/cardiologist",
        },
        // {
        //     name: "Internal Medicine Department",
        //     desc: "The department of a hospital responsible for the provision of medical and surgical care to patients arriving at the hospital in need of immediate care.",
        //     imgurl: "assets/department/cardio.png",
        //     linkto: "/clinics/internal-medicine",
        // },
        {
            name: "Dentistry",
            desc: "Dentistry, the profession concerned with the prevention and treatment of oral disease, including diseases of the teeth and supporting structures and diseases of the soft tissues of the mouth.",
            imgurl: "assets/department/dentist.png",
            linkto: "/clinics/dentistry",
        },
        {
            name: "Dietitian",
            desc: "The Clinical Nutrition & Dietetics department at Lifepoint Multispecialty Hospital is a one-stop solution for all therapeutic diet and nutrition queries when it comes to health and illness.",
            imgurl: "assets/department/die.png",
            linkto: "/clinics/dietitian",
        },
        {
            name: "Dermatology and Cosmetology",
            desc: "Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects.",
            imgurl: "assets/department/derma.png",
            linkto: "/clinics/dermatology",
        },
        {
            name: "Orthopedics",
            desc: " Orthopedics is the branch of medicine concerned with diseases, injuries and conditions of the musculoskeletal system or the body's muscles and skeleton.",
            imgurl: "assets/department/ortho.png",
            linkto: "/clinics/orthopedics",
        },
        {
            name: "General Surgery",
            desc: "General surgery are deal with diseases involving the skin, breast, soft tissue, trauma, Peripheral artery disease and hernias.",
            imgurl: "assets/department/surgery.png",
            linkto: "/clinics/general-surgery",
        },
        {
            name: "Urology",
            desc: "Urology is a part of health care that deals with diseases of the male and female urinary tract (kidneys, ureters, bladder and urethra).",
            imgurl: "assets/department/Urology.png",
            linkto: "/clinics/urology",
        },
        {
            name: "Neuro",
            desc: "Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system.",
            imgurl: "assets/department/neurology.png",
            linkto: "/clinics/neuro",
        },
        {
            name: "Psychiatric",
            desc: "Psychiatry is the branch of medicine focused on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders.",
            imgurl: "assets/department/Pshyciatric.png",
            linkto: "/clinics/pshyciatric",
        },
        {
            name: "Bariatric Surgery",
            desc: "Bariatric surgery is an operation that is performed in order to help such individuals lose weight.",
            imgurl: "assets/department/Bariatic.png",
            linkto: "/clinics/bariatic-surgery",
        },
        {
            name: "Physiotherapy",
            desc: "Healthcare profession concerned with the assessment, maintenance, and restoration of the physical function.",
            imgurl: "assets/department/physio.png",
            linkto: "/clinics/physiotherapist",
        },
        {
            name: "ENT (Ear, Nose & Throat)",
            desc: "If you have a health problem with your head or neck, your doctor might recommend that you see an otolaryngologist.",
            imgurl: "assets/department/EarNoseThroat.png",
            linkto: "/clinics/ear-nose-throat",
        },
    ];

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
                        {/* <Link
                            onClick={scrollToTop}
                            to={clinic.linkto}
                            className="depLink"
                        >
                            Get Details..
                        </Link> */}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AllClinics;
