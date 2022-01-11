import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./bookappointment.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import PhoneInput from "react-phone-input-2";

// import "react-phone-input-2/lib/style.css";

import "react-phone-input-2/lib/high-res.css";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

function BookAppointment() {
    const [book, setBook] = useState(false);
    const [loading, setloading] = useState(false);
    const [department, setDepartment] = useState("");
    const [doctor, setDoctor] = useState("");
    const [patient, setPatient] = useState("");
    const [slot, setSlot] = useState("");
    const [selectedDept, setSelectedDept] = useState(null);
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [docArr, setDocArr] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [dateb, setDateB] = useState("");
    const [blankslot, setblankslot] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");

    //console.log(moment(date).format('DD-MM-YYYY').toString())
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
        tempArr = doctor.filter((doc) =>
            doc.department.includes(selectedDept._id)
        );

        setDocArr(tempArr);
        setSelectedDept(selectedDept);
    };
    const handleChangeDoc = (selectedDoc) => {
        setSelectedDoc(selectedDoc);
        setblankslot(null);
    };
    const handleChangeDate = (date) => {
        setDateB(moment(date).format("DD-MM-YYYY").toString());
        const datebook = moment(date).format("DD-MM-YYYY").toString();
        //console.log(datebook);
        const patientdate = patient.filter(
            (item) => item.date === datebook && item.doctor === selectedDoc._id
        );
        //console.log(patientdate);
        const patientslotbooked = patientdate.map((value) => value.slot);
        const docSlot = selectedDoc.slots;

        const availdocSlot=selectedDoc.availslot
        const availdocSlotu=availdocSlot.filter(e=>e.dateav===datebook)
        if(availdocSlotu.length>0){
            //const availdocSlotu=availdocSlot.filter(e=>e.dateav===datebook)
            console.log(availdocSlotu)
       // const availosradocslot=(availdocSlotu.map(e=>e.availSloty))
       const availosradocslot=availdocSlotu[0].availSloty
        console.log(availosradocslot)
        const res = availosradocslot.filter((item) => !patientslotbooked.includes(item));
        console.log(res)
        setblankslot(res);
        }else{
            const res = docSlot.filter((item) => !patientslotbooked.includes(item));
        setblankslot(res);
        }
        

        //console.log(dateb)

        setStartDate(date);
    };
    const handleChangeInput = (e) => {
        //console.log(e.target.value)
        //console.log(dateb)
        // console.log(blankslot)

        setSlot(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        //  console.log(selectedDoc.label)
        //console.log(selectedDept.label)
        // console.log(gender)

        if (
            (dateb &&
                selectedDoc.label &&
                selectedDept.label &&
                name &&
                department &&
                doctor &&
                email) ||
            phone
        ) {
            const patient = {
                date: dateb,
                doctorname: selectedDoc.label,
                departmentname: selectedDept.label,
                gender,
                slot,
                name,
                age,
                message,
                phone,
                department: selectedDept._id,
                doctor: selectedDoc._id,
                email,
            };
           // console.log(patient);
            setBook(true);
            try {
                const res = await axios.post(
                    "https://doctorappapi.herokuapp.com/api/patient",
                    patient
                );
                setBook(false);
                alert(res.data.msg);
                setDateB("");
                setAge("");
                setName("");

                setMessage("");
                setPhone("");
                setSelectedDept("");
                setSelectedDoc("");
                window.location.reload();
            } catch (error) {
                setBook(true);
                console.log(error);
                setBook(false);
            }
        } else {
            alert("Please fill all the field");
        }
    };
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
                {book ? (
                    <div className="w-full h-full flex justify-center items-center py-4">
                        <h1 className="text-2xl m-4 p-4 ">
                            Wait Booking your appointment and will send you
                            message shortly.....
                        </h1>
                    </div>
                ) : loading ? (
                    <div className="w-full h-full flex justify-center items-center py-4">
                        <Loading />
                    </div>
                ) : (
                    <div className="bookWrapper">
                        <div className="appointmentText">
                            <h1 className="appointmentHead">
                                Online Appointment Form
                            </h1>
                            <p className="appointmentPara">
                                Now you can request an appoinment in some simple
                                steps Online
                            </p>
                        </div>
                        <form
                            className="appointmentForm"
                            onSubmit={handleSubmit}
                        >
                            <input
                                className="bookFormItem"
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                className="bookFormItem"
                                type="number"
                                name="age"
                                placeholder="Your Age"
                                min={1}
                                max={100}
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />

                            {/* gender radio box below  */}
                            <div className="serviceText">Your Gender : </div>
                            <div className="bookFormItems">
                                <label
                                    className="bookFormLabel "
                                    htmlFor="
                            male"
                                >
                                    <input
                                        type="radio"
                                        className="bookFormRadio"
                                        name="gender"
                                        value="male"
                                        id="male"
                                        onChangle={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    Male
                                </label>

                                <label
                                    className="bookFormLabel"
                                    htmlFor="female"
                                >
                                    {" "}
                                    <input
                                        type="radio"
                                        className="bookFormRadio"
                                        name="gender"
                                        id="female"
                                        value="Female"
                                        onChangle={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    Female
                                </label>
                            </div>
                            <div className="flex flex-col justify-center items-center md:flex-row gap-2">
                            <PhoneInput
                                    className="bookFormItem"
                                    country="sa"
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    placeholder="Enter phone number"
                                    enableSearch
                                />
                                <input
                                    className="bookFormItem"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                               
                            </div>
                            {/* Services Check box below  */}
                            <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-4 mb-2">
                                <div className="mb-2">
                                    <div className="serviceText">
                                        Select Clinic :{" "}
                                    </div>
                                    <Select
                                        value={selectedDept}
                                        onChange={handleChangeDept}
                                        options={department}
                                    />
                                </div>
                                {selectedDept && docArr && (
                                    <div className="mb-2">
                                        <div className="serviceText">
                                            Select Doctor :{" "}
                                        </div>
                                        <Select
                                            value={selectedDoc}
                                            onChange={handleChangeDoc}
                                            options={docArr}
                                        />
                                    </div>
                                )}
                                {selectedDept && docArr && selectedDoc && (
                                    <div className="mb-2">
                                        <div className="serviceText mt-2">
                                            Select Date :{" "}
                                        </div>
                                        <DatePicker
                                            className="py-2 px-4 text-center mb-4 border-2 rounded-sm"
                                            selected={startDate}
                                            onChange={handleChangeDate}
                                            minDate={moment(). toDate()}
                                        />
                                    </div>
                                )}
                                {selectedDept &&
                                    docArr &&
                                    selectedDoc &&
                                    dateb &&
                                    blankslot && (
                                        <div className="mb-2">
                                            <div className="serviceText mt-2">
                                                Select Slot :{" "}
                                            </div>
                                            <select
                                                className="py-2 px-4 text-center border-2 rounded-sm"
                                                name="slot"
                                                value={slot}
                                                onChange={handleChangeInput}
                                            >
                                                
                                                <option value="">
                                                    {blankslot.length===0 ? "--No Slot--" :"--Choose Slot--"}
                                                </option>
                                                {blankslot.map((slot) => (
                                                    <option
                                                        value={slot}
                                                        key={slot}
                                                    >
                                                        {slot}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                            </div>

                            <textarea
                                className="bookFormItem"
                                name="message"
                                rows={5}
                                resize="none"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <div className="bookFormBtn md:px-72">
                                <input
                                    type="submit"
                                    className="bookFormButton "
                                    value="Book Appointment"
                                />
                                {/* <Link
                                    to="/appointment"
                                    className="bookFormButton text-center"
                                >
                                    Find Doctor
                                </Link> */}
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}

export default BookAppointment;
