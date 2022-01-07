import React from "react";
import SingleDoctor from "./Doctor/SingleDoctor";
import "./About.css";

const AdminMem = () => {
    return (
        <>
            <div className="md:p-2 md:my-6 text-center">
                <h2 className="mt-12 mb-4 text-4xl font-medium">
                    {" "}
                    Administration Members
                </h2>
                <div className="flex justify-center items-center w-full">
                    <div className="h-1 w-16 bg-primary-brown"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 justify-center justify-items-center items-center gap-4 md:grid-cols-3 px-2 md:px-10">
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Alla Adel Abdulrhman Bin Soufayan"
                    position="General Manager"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr.ALI Saqer"
                    position="Finance Director"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Dr. Feras Al-harbi"
                    position="Medical Director"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Dr.Adulrahman Sweyfi "
                    position="Deputy Medical Director"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Alaa Awad"
                    position="Nursing Director"
                />
                <SingleDoctor
                    imgUrl="/assets/dr/maledirector.png"
                    name="Mr. Sameer Mohammed"
                    position="Internal controller"
                />
            </div>
        </>
    );
};

export default AdminMem;
