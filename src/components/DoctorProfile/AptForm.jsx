import React, { useState,useEffect } from "react";
import { withTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { demoData } from "../DemoData/demodata";

import "../BookAppointment/bookappointment.css";

const AptForm = ({ t }) => {
    const [patientId, setPatientId] = useState("");
    const [fileNo, setFileNo] = useState("");
    const [slot, setSlot] = useState("");
    const [dateb, setDateB] = useState("");
    const [blankslot, setblankslot] = useState("");
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [patient, setPatient] = useState("");
    const [loading, setloading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [message, setMessage] = useState("");

    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const singleDoc = demoData.filter(
        (data) => data.linkto === splitLocation[2]
    );
    

    const id="61dc0edbb24354b161f1730f"
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
                    `https://doctorappapi.herokuapp.com/api/patient/doctor/${id}`
    
                );
                setPatient(res.data.data);
                const resp = await axios.get(
                    `https://doctorappapi.herokuapp.com/api/doctor/${id}`
    
                )
               
              
                setSelectedDoc(resp.data[0]);
    
              
                
    
                setloading(false);
            };
            getroom();
        }, []);

    const handleChangeInput = (e) => {
        setSlot(e.target.value);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(singleDoc[0].name)
    };

    return (
        <div>
            <form className="w-full" onSubmit={handleSubmit}>
                <h1 className="font-semibold text-center text-xl py-4">
                    {t("app.16")} {t("app.1")}
                </h1>
                <div className="flex flex-col gap-4">
                    <input
                        className="bookFormItem"
                        type="text"
                        name="patientid"
                        placeholder={t("app.17")}
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                        dir={t("directionc")}
                    />
                    <input
                        className="bookFormItem"
                        type="text"
                        name="name"
                        placeholder={t("app.18")}
                        value={fileNo}
                        onChange={(e) => setFileNo(e.target.value)}
                        dir={t("directionc")}
                    />
                </div>
                <div
                    className="w-full grid grid-cols-1 gap-3 mb-2"
                    dir={t("directionc")}
                >
                    <div className="mb-2">
                        <div className="serviceText mt-2">{t("app.11")} : </div>
                        <DatePicker
                            className="py-2 px-4 text-center border-2 rounded-sm"
                            selected={startDate}
                            onChange={handleChangeDate}
                            minDate={moment().toDate()}
                        />
                    </div>
                    <div className="mb-2">
                    {
                                    selectedDoc &&
                                    dateb &&
                                    blankslot && (
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
        </div>
    );
};

export default withTranslation()(AptForm);
