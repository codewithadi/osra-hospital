import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import Select from "react-select";

import "../BookAppointment/bookappointment.css";

const AptForm = ({ t }) => {
    const [patientId, setPatientId] = useState("");
    const [fileNo, setFileNo] = useState("");
    const [slot, setSlot] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [message, setMessage] = useState("");

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

export default withTranslation()(AptForm);
