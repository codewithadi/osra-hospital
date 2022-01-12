import React from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";

const TopBar = ({ t }) => {
    const { i18n } = useTranslation();
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="w-full h-7 flex justify-end items-center px-3 md:px-6 z-100 shadow-md">
            <a
                className="p-1 md:py-1 md:px-6 mr-4 text-sm md:text-base text-white font-semibold uppercase"
                href="tel:0114311111"
                style={{ background: "#588325" }}
            >
                {t("top-emergency")}: 011-431-1111
            </a>
            <form className="px-4">
                <select
                    onClick={changeLanguage}
                    className="text-center outline-none"
                >
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                </select>
            </form>
        </div>
    );
};

export default withTranslation()(TopBar);
