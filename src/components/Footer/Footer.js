import React from "react";
import { Link } from "react-router-dom";
// linear-gradient(to right, #017439 0%, #3eac55 100%)

function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div
            className="md:pt-8 pt-4"
            style={{ background: "#431423", color: "#fff" }}
        >
            <footer className="dark:bg-gray-300">
                <div className="container px-6 py-2 mx-auto bg-transparent">
                    <div className="lg:flex bg-transparent">
                        <div className="w-full -mx-7 lg:w-2/5 bg-transparent">
                            <div className="px-6 bg-transparent">
                                <div className="bg-transparent">
                                    <Link
                                        onClick={scrollToTop}
                                        to="/"
                                        className="text-xl font-bold bg-transparent hover:text-blue-400 dark:hover:text-gray-700"
                                    >
                                        <img
                                            className="h-24 w-44 md:h-28 md:w-48 bg-transparent"
                                            src="/OIH.logo.011.png"
                                            alt="brandlogofooter"
                                        />
                                        {/* Company Name */}
                                    </Link>
                                </div>

                                <div className="max-w-md mt-2 font-semibold dark:text-gray-800 bg-transparent px-2 md:pr-32 cursor-default ">
                                    AlOsrah international Hospital is a
                                    Secondary level facility with 50
                                    bed-Capacities situated in the middle of
                                    Riyadh city, Saudi Arabia.
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1 lg:ml-4 bg-transparent">
                            <div className="grid grid-cols-1 md:gap-6 gap-2 sm:grid-cols-4 md:grid-cols-4 bg-transparent">
                                <div className="bg-transparent font-semibold">
                                    <h3 className=" font-semibold text-lg uppercase dark: bg-transparent cursor-default">
                                        Quick Links
                                    </h3>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-700 delay-100"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/about"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/services"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Services
                                    </Link>
                                    <Link
                                        onClick={scrollToTop}
                                        to="/media"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Media
                                    </Link>
                                    {/* <Link
                                        onClick={scrollToTop}
                                        to="/blog"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Blog
                                    </Link> */}
                                    <Link
                                        onClick={scrollToTop}
                                        to="/contact"
                                        className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Contact
                                    </Link>
                                </div>

                                <div className="bg-transparent font-semibold">
                                    <h3 className=" font-semibold uppercase text-lg dark: bg-transparent cursor-default">
                                        Get Support
                                    </h3>
                                    <div className="block mt-2 text-sm  dark: bg-transparent">
                                        <div className="inline-flex md:pr-4 mb-2 hover:text-blue-400 transition-colors duration-700 delay-100">
                                            <svg
                                                className="w-4 h-4 rounded-md bg-transparent"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>{" "}
                                            <div className="pl-1 bg-transparent">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="tel: 011431111"
                                                    className="bg-transparent"
                                                >
                                                    011431111
                                                </a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-700 delay-100">
                                        <div className="inline-flex bg-transparent">
                                            <svg
                                                className="w-5 h-5 bg-transparent"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <div className="pl-1 bg-transparent">
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href="mailto:hospitalmail@gmail.com"
                                                    className="bg-transparent"
                                                >
                                                    hospitalmail@gmail.com
                                                </a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block mt-2 text-sm hover:text-blue-400 transition-colors duration-700 delay-100">
                                        <div className="inline-flex bg-transparent">
                                            <svg
                                                className="w-5 h-5 bg-transparent"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <div className="pl-1 bg-transparent">
                                                <a
                                                    target="_blank"
                                                    className="bg-transparent"
                                                    rel="noreferrer"
                                                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.147329415484!2d46.59436991499743!3d24.584111184185087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f198a70eb0c97%3A0x78e1d83094c785a9!2sAl%20Osrah%20International%20Hospital!5e0!3m2!1sen!2sin!4v1639135132397!5m2!1sen!2sin"
                                                >
                                                    Exit 29 - Riyadh
                                                </a>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* -------------------- */}
                                <div className="font-semibold">
                                    <h3 className="pb-2 font-semibold text-lg uppercase dark: bg-transparent cursor-default">
                                        Working Hours
                                    </h3>
                                    <div className="py-1 text-sm text-blue-300 uppercase">
                                        Outside patient,
                                    </div>
                                    <div className="text-sm">
                                        Morning: 9:00 a.m to 12:00 p.m
                                    </div>
                                    <div className="text-sm">
                                        Evening: 4:00 p.m to 9:30 p.m
                                    </div>

                                    <div className="py-1 text-sm text-blue-300 uppercase">
                                        Emergency, Pharmacy, Laboratory, Patient
                                        Relations (in-duty manager):
                                    </div>
                                    <div>24 Hours</div>

                                    <div className="py-1 text-sm text-blue-300 uppercase">
                                        In patient visit times:
                                    </div>
                                    <div className="text-sm">
                                        Saturday to Thursday: 7:00 a.m to 12:00
                                        a.m
                                    </div>
                                    <div className="text-sm">
                                        Friday: 2:00 p.m to 12:00 a.m
                                    </div>
                                </div>
                                {/* ------------------------- */}
                                <div className="bg-transparent">
                                    <h3 className=" font-semibold text-lg uppercase dark: bg-transparent cursor-default">
                                        Find Us
                                    </h3>
                                    <div className="flex mt-4 -mx-2 bg-transparent">
                                        <a
                                            href="https://twitter.com/alosrahhospital"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                                            aria-label="twitter"
                                        >
                                            <img
                                                className="w-10 h-10 bg-transparent"
                                                src="/assets/logo/tt.png"
                                                alt="twitter"
                                            />
                                        </a>

                                        <a
                                            href="https://www.instagram.com/alosrah.hospital/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                                            aria-label="Facebook"
                                        >
                                            <img
                                                className="w-10 h-10 bg-transparent"
                                                src="/assets/logo/ig.png"
                                                alt="instagram"
                                            />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/alosrah.hospital"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mx-2 cursor-pointer text-gray-200 dark:text-gray-200 bg-transparent hover:text-gray-200 dark:hover:text-gray-400"
                                            aria-label="Facebook"
                                        >
                                            <img
                                                className="w-10 h-10 bg-transparent"
                                                src="/assets/logo/fb.png"
                                                alt="facebook"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="h-px my-6 bg-green-500 border-none dark:bg-gray-900 " />

                    <div className="bg-transparent font-semibold cursor-default">
                        <div className="md:flex-row flex flex-col text-center  dark:text-white justify-center bg-transparent">
                            <p className="md:border-r-2 px-2 bg-transparent">
                                © Al-Osrah International Hospital - All rights
                                reserved
                            </p>{" "}
                            <p className="px-2 bg-transparent">
                                {" "}
                                Developed by EnR Team
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
