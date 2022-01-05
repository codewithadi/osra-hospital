import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./bookappointment.css";
import DatePicker from "react-datepicker";
import moment from "moment"
import axios from "axios"


import "react-datepicker/dist/react-datepicker.css";

function BookAppointment() {
    const [loading, setloading] = useState(true);
    const[department,setDepartment]=useState('')
    const[doctor,setDoctor]=useState('')
    const [patient,setPatient]=useState('')
    const [selectedDept, setSelectedDept] = useState(null);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [docArr, setDocArr] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    //console.log(moment(date).format('DD-MM-YYYY').toString())

    const doctors = [
        {
            value: "Eman Radwan",
            label: "Eman Radwan",
            spec: ["neuro", "phschiatric"],
        },
        {
            value: "Attif Bassas",
            label: "Attif Bassas",
            spec: ["surgery", "bariatric-surgery"],
        },
        {
            value: "Rehab Ammar",
            label: "Rehab Ammar",
            spec: ["dermatology"],
        },
        {
            value: "Mamdouh Oun Alsoud",
            label: "Mamdouh Oun Alsoud",
            spec: ["surgery", "or"],
        },
    ];
    const departments = [
        { value: "radiology", label: "Radiology" },
        { value: "physiotherapy", label: "Physiotherapy" },
        { value: "home-care", label: "Home Care" },
        { value: "operations", label: "Operations" },
        { value: "delivery", label: "Delivery" },
        { value: "or", label: "OR" },
        { value: "dermatology", label: "Dermatology" },
        { value: "pediatric", label: "Pediatric" },
        { value: "ob-gyna", label: "OB-Gyna" },
        { value: "ophthalmology", label: "Ophthalmology" },
        { value: "internal-medicine", label: "Internal Medicine" },
        { value: "dentistry", label: "Dentistry" },
        { value: "dietition", label: "Dietition" },
        { value: "surgery", label: "Surgery" },
        { value: "urology", label: "Urology" },
        { value: "cardiology", label: "Cardiology" },
        { value: "neuro", label: "Neuro" },
        { value: "phschiatric", label: "Phschiatric" },
        { value: "bariatric-surgery", label: "Bariatric Surgery" },
    ];
    useEffect(() => {
        const getroom = async () => {
          setloading(true);
          const res = await axios.get("https://doctorappapi.herokuapp.com/api/doctor");
          setDoctor(res.data);
          const resp = await axios.get("https://doctorappapi.herokuapp.com/api/department");
          setDepartment(resp.data)
          const respo = await axios.get("https://doctorappapi.herokuapp.com/api/patient");
          setPatient(respo.data)

          
          setloading(false);
        };
        getroom();
      }, []);
    const handleChangeDept = (selectedDept) => {
        
        let tempArr = [];
        setDocArr(null);
        setSelectedDoc(null);
        tempArr = doctor.filter((doc) =>
            doc.department.includes(selectedDept._id)
        );
       
        setDocArr(tempArr);
        setSelectedDept(selectedDept);

       
    };
    const handleChangeDoc = (selectedDoc) => {
        
        setSelectedDoc(selectedDoc);
    };
const handleChangeDate=(date) => {setStartDate(date)}
    return (
        <>
        {loading ? (
            <h1>Loading....</h1>
          ) : (<div className="book-appointment">
        
          <div className="depMainBack">
              <img
                  className="depMainImg"
                  src="assets/department/depMain.jpg"
                  alt="department Back"
              />
              <div className="depMainOverlay">
                  <h1 className="depMainText">Book Appointment</h1>
              </div>
          </div>
          <div className="bookWrapper">
              <div className="appointmentText">
                  <h1 className="appointmentHead">Online Appointment Form</h1>
                  <p className="appointmentPara">
                      Now you can request an appoinment in some simple steps
                      Online
                  </p>
              </div>
              <form className="appointmentForm">
                  <input
                      className="bookFormItem"
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                  />
                  <input
                      className="bookFormItem"
                      type="number"
                      name="age"
                      placeholder="Your Age"
                      min={1}
                      max={100}
                  />

                  {/* gender radio box below  */}
                  <div className="serviceText">Your Gender : </div>
                  <div className="bookFormItems">
                      <input
                          type="radio"
                          className="bookFormRadio"
                          name="gender"
                          value="male"
                      />
                      <label className="bookFormLabel">Male</label>

                      <input
                          type="radio"
                          className="bookFormRadio"
                          name="gender"
                          value="Female"
                      />
                      <label className="bookFormLabel">Female</label>
                  </div>

                  <input
                      className="bookFormItem"
                      type="text"
                      name="phone"
                      placeholder="Your Phone Number"
                  />
                  {/* Services Check box below  */}
                  <div className="serviceText">Select Department : </div>
                  <Select
                      value={selectedDept}
                      onChange={handleChangeDept}
                      options={department}
                  />
                  {selectedDept && docArr && (
                      <>
                          <div className="serviceText">Select Doctor : </div>
                          <Select
                              value={selectedDoc}
                              onChange={handleChangeDoc}
                              options={docArr}
                          />
                      </>
                  )}

{selectedDept && docArr && (<DatePicker className="py-4 m-4 border-2" selected={startDate} onChange={handleChangeDate} />)}
                  <textarea
                      className="bookFormItem"
                      name="message"
                      rows={5}
                      resize="none"
                      placeholder="Your Message"
                  ></textarea>
                  <div className="bookFormBtn">
                      <input
                          type="submit"
                          className="bookFormButton"
                          value="Book Appointment"
                      />
                  </div>
              </form>
          </div>
      </div>)}
        
        </>
    );
}

export default BookAppointment;
