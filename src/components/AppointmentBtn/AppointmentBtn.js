import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

const AppointmentBtn = ({ t }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <Link
            onClick={scrollToTop}
            to="/appointment"
            className="fixed top-72 left-1 z-1000"
        >
            <img className="w-24 h-24" src={t("booklogo")} alt="apt-logo" />
        </Link>
    );
};

export default withTranslation()(AppointmentBtn);
