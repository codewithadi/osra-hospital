import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import moment from "moment";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { demoData } from "../DemoData/demodata";

import "../BookAppointment/bookappointment.css";

const NewAptForm = ({ t }) => {
    const [patientId, setPatientId] = useState("");
    const [fileNo, setFileNo] = useState("");
    const [slot, setSlot] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("male");
    const [dateb, setDateB] = useState("");
    const [blankslot, setblankslot] = useState("");
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [patient, setPatient] = useState("");
    const [loading, setloading] = useState(false);
    const [department, setDepartment] = useState("");
    const [doctor, setDoctor] = useState("");
    const [seldoc, setseldoc] = useState();
    const [book, setBook] = useState(false);

    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const singleDoc = demoData.filter(
        (data) => data.linkto === splitLocation[2]
    );
    const id = singleDoc[0].moid;
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

        const availdocSlot = selectedDoc.availslot;
        const availdocSlotu = availdocSlot.filter((e) => e.dateav === datebook);
        if (availdocSlotu.length > 0) {
            //const availdocSlotu=availdocSlot.filter(e=>e.dateav===datebook)
            console.log(availdocSlotu);
            // const availosradocslot=(availdocSlotu.map(e=>e.availSloty))
            const availosradocslot = availdocSlotu[0].availSloty;
            console.log(availosradocslot);
            const res = availosradocslot.filter(
                (item) => !patientslotbooked.includes(item)
            );
            console.log(res);
            setblankslot(res);
        } else {
            const res = docSlot.filter(
                (item) => !patientslotbooked.includes(item)
            );
            setblankslot(res);
        }

        //console.log(dateb)

        setStartDate(date);
    };

    useEffect(() => {
        const getroom = async () => {
            setloading(true);
            const res = await axios.get(
                `https://www.alosrahhospital.com/api/patient/doctor/${id}`
            );
            setPatient(res.data.data);
            const resp = await axios.get(
                `https://www.alosrahhospital.com/api/doctor/${id}`
            );

            setseldoc(resp.data);
            setSelectedDoc(resp.data[0]);

            setloading(false);
        };
        getroom();
    }, []);

    const handleChangeInput = (e) => {
        setSlot(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //  console.log(selectedDoc.label)
        //console.log(selectedDept.label)
        // console.log(gender)

        if ((dateb && name && email) || phone) {
            const patient = {
                date: dateb,
                doctorname: selectedDoc.label,
                departmentname: singleDoc[0].search,
                gender,
                slot,
                name,
                age,
                message,
                phone,
                department: selectedDoc.department[0],
                doctor: selectedDoc._id,
                email,
            };
            // console.log(patient);
            setBook(true);
            try {
                const res = await axios.post(
                    "https://www.alosrahhospital.com/api/patient",
                    patient
                );
                setBook(false);
                alert(res.data.msg);
                setDateB("");
                setAge("");
                setName("");

                setMessage("");
                setPhone("");

                window.location.reload();
            } catch (error) {
                setBook(true);
                alert("You have not entered correct details");
                setBook(false);
            }
        } else {
            alert(`${t("success_message")}`);
        }
    };

    return (
        <div>
            {book ? (
                <div className="w-full h-full flex flex-col justify-center items-center py-4">
                    <h1 className="text-2xl m-4 p-4 ">{t("wait_till")}</h1>
                </div>
            ) : (
                <form className="w-full" onSubmit={handleSubmit}>
                    <h1 className="font-semibold text-center text-xl py-4">
                        {t("app.15")} {t("app.1")}
                    </h1>
                    <input
                        className="bookFormItem"
                        type="text"
                        name="name"
                        placeholder={t("app.3")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        dir={t("directionc")}
                    />
                    <input
                        className="bookFormItem"
                        type="number"
                        name="age"
                        placeholder={t("app.4")}
                        min={1}
                        max={100}
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        dir={t("directionc")}
                    />

                    {/* gender radio box below  */}
                    <div className="serviceText" dir={t("directionc")}>
                        {t("app.5")}{" "}
                    </div>
                    <div className="bookFormItems" dir={t("directionc")}>
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
                                onChange={(e) => setGender(e.target.value)}
                            />
                            {t("app.6")}
                        </label>

                        <label className="bookFormLabel" htmlFor="female">
                            {" "}
                            <input
                                type="radio"
                                className="bookFormRadio"
                                name="gender"
                                id="female"
                                value="Female"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            {t("app.7")}
                        </label>
                    </div>
                    <div className="flex flex-col gap-2">
                        <PhoneInput
                            className="bookFormItem"
                            country="sa"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            placeholder="Enter phone number"
                            enableSearch
                            dir={t("directionc")}
                        />
                        <input
                            className="bookFormItem"
                            type="email"
                            name="email"
                            placeholder={t("app.8")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            dir={t("directionc")}
                        />
                    </div>
                    <div
                        className="w-full grid grid-cols-1 gap-3 mb-2"
                        dir={t("directionc")}
                    >
                        <div className="mb-2">
                            <div className="serviceText mt-2">
                                {t("app.11")} :{" "}
                            </div>
                            <DatePicker
                                className="py-2 px-4 text-center border-2 rounded-sm"
                                selected={startDate}
                                onChange={handleChangeDate}
                                minDate={moment().toDate()}
                            />
                        </div>
                        <div className="mb-2">
                            {selectedDoc && dateb && blankslot && (
                                <div className="mb-2">
                                    <div className="serviceText mt-2">
                                        {t("app.12")} :{" "}
                                    </div>
                                    <select
                                        className="py-2 px-4 text-center border-2 rounded-sm"
                                        name="slot"
                                        value={slot}
                                        onChange={handleChangeInput}
                                    >
                                        <option value="">
                                            {blankslot.length === 0
                                                ? "--No Slot--"
                                                : "--Choose Slot--"}
                                        </option>
                                        {blankslot.map((slot) => (
                                            <option value={slot} key={slot}>
                                                {slot}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>

                    <textarea
                        dir={t("directionc")}
                        className="bookFormItem"
                        name="message"
                        rows={5}
                        resize="none"
                        placeholder={t("app.13")}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="w-full">
                        <input
                            type="submit"
                            className="bookFormButton "
                            value={t("app.14")}
                            dir={t("directionc")}
                        />
                    </div>
                </form>
            )}
        </div>
    );
};

export default withTranslation()(NewAptForm);
