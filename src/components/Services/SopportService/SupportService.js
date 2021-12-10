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
            <h1 className="mb-7">Supporting Medical Services</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center py-10 px-2 md:px-20">
        <SupportGrid
          imgUrl="/assets/images/radiology.jpg"
          title="Radiology"
          desc="Radiology is committed to providing outstanding patient care by combining excellence in clinical imaging, research and state-of-the-art technology."
        />
        <SupportGrid
          imgUrl="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="Laboratory"
          desc="where tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease."
        />
        <SupportGrid
          imgUrl="/assets/images/Physiotherapy.jpg"
          title="Physiotherapy"
          desc="Healthcare profession concerned with the assessment, maintenance, and restoration of the physical function and performance of the body by physical."
        />
        <SupportGrid
          imgUrl="/assets/images/outpatient.jpg"
          title="Out-Patient Clinics"
          desc=""
        />
        <SupportGrid
          imgUrl="/assets/images/inpatient.jpg"
          title="In-Patient "
          desc=""
        />
        <SupportGrid
          imgUrl="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          title="OR department "
          desc=""
        />
        <SupportGrid
          imgUrl="/assets/images/homecare-1.jpg"
          title="Home care"
          desc="skilled care delivered directly to a patient's home. This type of care is provided by licensed medical professionals including nurses, therapists, and aides for the purpose of treating or managing an illness, injury, or medical condition."
        />
        <SupportGrid
          imgUrl="https://images.unsplash.com/photo-1579684453401-966b11832744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80"
          title="Operations"
          desc="he operating room, sometimes called the OR or surgery center, is where surgery (say: SUR-juh-ree) takes place in a hospital"
        />
        <SupportGrid
          imgUrl="/assets/images/delivery.jpg"
          title="Delivery"
          desc="the care and treatment of women in childbirth and during the period before and after delivery. of or relating to childbirth or obstetrics. Abbreviations"
        />
        <SupportGrid
          imgUrl="/assets/images/icu.jpg"
          title="ICU"
          desc="ICU unit in a hospital providing intensive care for critically ill or injured patients that is staffed by specially trained medical personnel and has equipment that allows for continuous monitoring and life support —abbreviation ICU. — called also critical care unit."
        />
        <SupportGrid
          imgUrl="/assets/images/er.jpg"
          title="ER"
          desc="a hospital room or area staffed and equipped for the reception and treatment of persons with conditions (as illness or trauma) requiring immediate medical care."
        />
      </div>
    </div>
  );
};

export default SupportService;
