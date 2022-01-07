import React from "react";
import SingleDoctor from "./Doctor/SingleDoctor";
import "./About.css"



const BoD = () => {
    return (
        <>
            <div className="md:p-2 md:my-6 text-center">
                <h2 className="mt-12 mb-4 text-4xl font-medium"style={{color: "#3f0f1e"}}>
                    {" "}
                    Board of Directors Members
                </h2>
                <div className="flex justify-center items-center w-full">
                    <div className="h-1 w-16 bg-primary-brown"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 justify-center justify-items-center items-center gap-4 md:grid-cols-4 px-2 md:px-10" style={{color: "#3f0f1e"}}>
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Hesham Abdulrahman Albajadi"
                    position="Chairman of Board of Directors"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mohammed Abdulrahman Al Olake"
                    position="Deputy Chairman of the Board"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Faisal Abdulrahman Albajadi "
                    position="Member of the Board of Directors"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Bader Abdulrahman Albajadi "
                    position="Member of the Board of Directors"
                />
            </div>
        </>
    );
};

export default BoD;
