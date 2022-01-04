import React from "react";
import InsuranceGrid from "./InsuranceGrid";

const Insurance = () => {
    return (
        <div>
            <div
                className="bg-center bg-cover"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
                    width: "100%",
                    height: "55vh",
                }}
            >
                <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
                    <div className="text-center font-semibold text-white text-4xl md:text-7xl">
                        <h1 className="mb-7">Insurance</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center py-10 px-2 md:px-20">
                <InsuranceGrid
                    imgUrl="/assets/insurance/bupa.png"
                    title="Bupa"
                    desc="Bupa's global network and reach enables Bupa Arabia to extract best practices and global medical guidelines from all around the world on an ongoing basis and implement them in Saudi Arabia."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Tuwuniya.png"
                    title="Tuwuniya"
                    desc="Tawuniya provides its customers with more than 60 types of insurance including medical, motor, fire, property, engineering, casualty, marine, aviation, Takaful, liability insurance and many other types of insurance."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Medgulf.png"
                    title="Medgulf"
                    desc="MEDGULF is one of the Kingdom's largest insurance companies, providing a comprehensive choice of cooperative Health, Motor, Property and other insurance and reinsurance services."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Malath.jpg"
                    title="Malath"
                    desc="Malath Cooperative Insurance Co. is a 100% Saudi Company established in 2007 by Saudi Leaders & Entrepreneurs. It is the 2nd insurance company that was listed in the Saudi Stock Market."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Alrajhi-Takaful.jpg"
                    title="Alrajhi Takaful"
                    desc="Insurance Plans which Suits Your Need. Choose From Third Party, Wafi Smart & Comprehensive. Drive Worry Free & Ensure that Your Motor is Insured with Motor Comprehensive Insurance."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/mednet.png"
                    title="Mednet"
                    desc="MedNet provide managed care service in Saudi Arabia and dedicated to serving high-quality healthcare solutions in Middle East."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/GLOBAL-NET.jpg"
                    title="Globalnet"
                    desc="Globalnet Insurance LLC builds policies with both you and your vehicle in mind, customizing the types and levels of coverage to fit."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/tcs.png"
                    title="TCS"
                    desc="TCS delivers the best in personalized customer service to patients while controlling utilization and costs resulting from services rendered within the scoupe of health care policies."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/aletihad.png"
                    title="AL ETIHAD (TCS)"
                    desc="Al-Etihad Co-operative Insurance Co. is one of the largest insurance companies in the Kingdom today. We are authorized to transact all classes of insurance except life insurance, supervised and regulated by SAMA"
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/ARABIANSHEILD.png"
                    title="ARABIAN SHEILD"
                    desc="Arabian Shield Cooperative Insurance Company sells insurance products including motor, marine, property and medical insurance. In addition, the company also provides claim settlement services to its policyholders."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/Gulf-Union.jpg"
                    title="Gulf Union"
                    desc="Gulf Union have grown to be among the top national insurers in the Kingdom of Saudi Arabia that enable us to be licensed as one of the recognized Insurance."
                />
                <InsuranceGrid
                    imgUrl="/assets/insurance/GLOBMED.jpg"
                    title="GLOBMED"
                    desc="Through our network of world-class doctors and healthcare facilities, from the initial consultation to post-treatment recovery, we arrange every detail to provide you with the very best healthcare solutions."
                />
            </div>
        </div>
    );
};

export default Insurance;
