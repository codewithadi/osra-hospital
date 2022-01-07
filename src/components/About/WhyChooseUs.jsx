import React from "react";

const WhyChooseUs = () => {
    return (
        <div>
            <div className="md:p-2 md:my-6 text-center">
                <h2 className="mt-12 text-4xl font-medium">Why Choose Us</h2>
                <p className="text-lg px:4 md:my-4 text-gray-500">
                    There live the blind texts separated they right at the coast
                    of the Semantics.
                </p>
                <div className="flex justify-center items-center w-full">
                    <div className="h-1 w-16 bg-blue-500"></div>
                </div>
            </div>

            <div class="px-2 md:grid md:grid-cols-2 md:gap-4 justify-items-center md:px-10">
                {/* col 1  */}
                <section className="md:px-5 flex flex-col justify-center items-center">
                    <div className="mx-4 md:mt-4 mb-1">
                        <div className="flex">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/mission.png"
                                alt="mission"
                            />
                            <h3 className="font-medium px-3 text-2xl">
                                Mission
                            </h3>
                        </div>
                        <p className="text-lg my-2 text-gray-600">
                            We are dedicated to provide high quality,
                            evidence-based and safe healthcare.{" "}
                        </p>
                    </div>

                    <div className="mx-4 my-1">
                        <div className="flex md:mt-4">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/vision.png"
                                alt="mission"
                            />
                            <h3 className="font-medium px-3 text-2xl">
                                Vision
                            </h3>
                        </div>
                        <p className="text-lg my-2 text-gray-600">
                            To be a benchmark in provision of quality healthcare
                            services in the private sector in the Kingdom
                        </p>
                    </div>
                    <div className="mx-4 my-1">
                        <div className="flex md:mt-4">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/values.png"
                                alt="values"
                            />
                            <h3 className="font-medium px-3 text-2xl">
                                Values
                            </h3>
                        </div>
                        <p className="text-lg my-2 text-gray-600">
                            Dignity and respect | Medical excellence |
                            Transparency | Justice | Safety | Teamwork | Loyalty
                        </p>
                    </div>
                </section>

                {/* col 2  */}
                <section>
                    <div className="hidden md:flex justify-center items-center md:px-6">
                        <img
                            className="h-80 w-80"
                            src="/assets/about/doctor.png"
                            alt="Doctors"
                        />
                    </div>
                </section>

                {/* col 3  */}
                {/* <section>
                    <div className="mx-4 md:mt-8">
                        <div className="flex">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/technology.png"
                                alt="technology"
                            />
                            <h3 className="font-medium px-2 text-2xl">
                                Technology
                            </h3>
                        </div>
                        <p className="text-lg my-2 text-gray-600">
                            Anim pariatur cliche life eiusmod reprehenderit
                            enim.
                        </p>
                    </div>

                    <div className="mx-4">
                        <div className="flex md:mt-24">
                            <img
                                className="h-10 w-10"
                                src="/assets/about/values.png"
                                alt="values"
                            />
                            <h3 className="font-medium px-2 text-2xl">
                                Values
                            </h3>
                        </div>
                        <p className="text-lg my-2 text-gray-600">
                            Dignity and respect | Medical excellence |
                            Transparency | Justice | Safety | Teamwork |
                            Loyalty 
                        </p>
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default WhyChooseUs;
