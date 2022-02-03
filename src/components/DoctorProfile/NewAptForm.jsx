import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import moment from "moment";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import Select from "react-select";

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

    const handleChangeDate = (date) => {};

    const handleChangeInput = (e) => {
        setSlot(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
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
                        <div className="serviceText mt-2">{t("app.11")} : </div>
                        <DatePicker
                            className="py-2 px-4 text-center border-2 rounded-sm"
                            selected={startDate}
                            onChange={handleChangeDate}
                            minDate={moment().toDate()}
                        />
                    </div>
                    <div className="mb-2">
                        <div className="serviceText">{t("app.12")} : </div>
                        <select
                            className="py-2 px-4 text-center border-2 rounded-sm"
                            name="slot"
                            value={slot}
                            onChange={handleChangeInput}
                        >
                            <option value="">--Choose Slot--</option>

                            <option value="12-1">12-1</option>
                        </select>
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

export default withTranslation()(NewAptForm);
