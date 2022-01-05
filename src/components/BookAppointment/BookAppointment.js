import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./bookappointment.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import Loading from "../Loading/Loading";

function BookAppointment() {
  const [loading, setloading] = useState(true);
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patient, setPatient] = useState("");
  const [slot, setSlot]=useState('')
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docArr, setDocArr] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [dateb, setDateB]=useState("")
  const [blankslot, setblankslot]=useState("")
  const [name, setName]=useState("")
  const[age,setAge]=useState("")
  const[message,setMessage]=useState("")
  const [phone,setPhone]=useState("")
  const[gender,setGender]=useState("")
  
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
      const res = await axios.get(
        "https://doctorappapi.herokuapp.com/api/doctor"
      );
      setDoctor(res.data);
      const resp = await axios.get(
        "https://doctorappapi.herokuapp.com/api/department"
      );
      setDepartment(resp.data);
      const respo = await axios.get(
        "https://doctorappapi.herokuapp.com/api/patient"
      );
      setPatient(respo.data);

      setloading(false);
    };
    getroom();
  }, []);
  const handleChangeDept = (selectedDept) => {
    let tempArr = [];
    setDocArr(null);
    setSelectedDoc(null);
    tempArr = doctor.filter((doc) => doc.department.includes(selectedDept._id));

    setDocArr(tempArr);
    setSelectedDept(selectedDept);
  };
  const handleChangeDoc = (selectedDoc) => {
    setSelectedDoc(selectedDoc);
    setblankslot(null)
    
  };
  const handleChangeDate = (date) => {
    
      setDateB(moment(date).format('DD-MM-YYYY').toString())
      const datebook= moment(date).format('DD-MM-YYYY').toString()
      console.log(datebook)
      const patientdate= patient.filter(item=>item.date===datebook && item.doctor===selectedDoc._id)
      console.log(patientdate)
      const patientslotbooked=patientdate.map(value => value.slot)
      const docSlot=selectedDoc.slots
      const res=docSlot.filter(item=>!patientslotbooked.includes(item))
      setblankslot(res)

      //console.log(dateb)

    setStartDate(date);
  };
  const handleChangeInput = (e) => {
  //console.log(e.target.value)
  //console.log(dateb)
 // console.log(blankslot)

  setSlot(e.target.value);
};
const handleSubmit=async(e)=>{
  e.preventDefault()
  const patient ={date:dateb,slot,name,age,message,phone,department:selectedDept._id,doctor:selectedDoc._id}
  console.log(patient)
  try {
    
    const res = await axios.post("https://doctorappapi.herokuapp.com/api/patient", patient);
    alert(res.data.msg)
    setDateB("")
    setAge("")
    setName("")
   
    setMessage("")
    setPhone("")
    setSelectedDept("")
    setSelectedDoc("")
    
  } catch (error) {
    console.log(error);
  
   
  }
}
  return (
    <>
      
        <div className="book-appointment">
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
          {loading ? (
        <Loading/>
      ) : (
          <div className="bookWrapper">
            <div className="appointmentText">
              <h1 className="appointmentHead">Online Appointment Form</h1>
              <p className="appointmentPara">
                Now you can request an appoinment in some simple steps Online
              </p>
            </div>
            <form className="appointmentForm" onSubmit={handleSubmit}>
              <input
                className="bookFormItem"
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                className="bookFormItem"
                type="number"
                name="age"
                placeholder="Your Age"
                min={1}
                max={100}
                value={age}
                onChange={(e)=>setAge(e.target.value)}
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
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
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

              {selectedDept && docArr && selectedDoc && (
                <DatePicker
                  className="py-4 m-4 border-2"
                  selected={startDate}
                  onChange={handleChangeDate}
                />
              )}
              {selectedDept && docArr && selectedDoc && dateb && blankslot && (
              <div className="row">
                    <label htmlFor="slots">Slots: </label>
                    <select name="slot" value={slot} onChange={handleChangeInput} >
                        <option value="">----Slot---</option>
                        {
                            blankslot.map(slot => (
                                <option value={slot} key={slot}>
                                    {slot}
                                </option>
                            ))
                        }
                    </select>
                </div>)}
              <textarea
                className="bookFormItem"
                name="message"
                rows={5}
                resize="none"
                placeholder="Your Message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
              <div className="bookFormBtn">
                <input
                  type="submit"
                  className="bookFormButton"
                  value="Book Appointment"
                />
              </div>
            </form>
          </div> )}
        </div>
     
    </>
  );
}

export default BookAppointment;
