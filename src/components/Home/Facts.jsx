import React from "react";
import "../../App.css";

const Facts = () => {
    return (
        <div className="w-full relative facts-container">
            <img
                className="h-full w-full bg-cover bg-center"
                style={{ objectFit: "cover" }}
                src="/assets/images/2-min.png"
                alt="prod1"
            />
            <div className="w-full h-full main-dark-bg bg-black opacity-50"></div>
            <div className="main-text-fact text-grey-300">
                <h1 className="text-white text-center font-semibold text-xl md:text-4xl bg-transparent mt-20">
                    Serving the World <br />
                    <i>since 1991</i>
                </h1>

                <div className="flex justify-center items-center flex-wrap gap-4 justify-items-center md:gap-x-16 md:grid-cols-3 lg:grid-cols-4 my-2 md:px-20 md:my-4">
                    <div className="text-lg">
                        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
                            30+
                        </h2>
                        <h3 className="text-white text-center font-semibold text-base md:text-lg">
                            Years of Experience
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
                            40+
                        </h2>
                        <h3 className="pl-2 text-white font-semibold text-base md:text-lg">
                            Doctors on Panel
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
                            25+
                        </h2>
                        <h3 className="pl-2 text-white font-semibold text-base md:text-lg">
                            Clinics Available
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
                            180000+
                        </h2>
                        <h3 className="text-white font-semibold text-base md:text-lg">
                            Patients per Year
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
                            350000+
                        </h2>
                        <h3 className="text-white font-semibold text-base md:text-lg">
                            Lab Investigations per Year
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
                            5000+
                        </h2>
                        <h3 className="text-white font-semibold text-base md:text-lg">
                            Surgery Operations per Year
                        </h3>
                    </div>

                    <div className="text-lg">
                        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
                            5000+
                        </h2>
                        <h3 className="text-white font-semibold text-base md:text-lg">
                            Birth Deliveries per Year
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
