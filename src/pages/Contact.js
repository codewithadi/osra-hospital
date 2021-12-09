import React, { useState } from "react";
import "./contact.css";
// import swal from "sweetalert";
// import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [mailBody, setmailBody] = useState("");
  const [subject, setSubject] = useState("");

  const handleContactSubmit = (e) => {
    if (name === "" || email === "" || mailBody === "" || subject === "") {
      alert("fill all fields");
      return;
    }
    e.preventDefault();
    // axios
    //   .post("http://localhost:5000/api/postcontactmail", {
    //     name,
    //     email,
    //     subject,
    //     mailBody,
    //   })
    //   .catch((err) => console.log(err));
    setName("");
    setemail("");
    setmailBody("");
    setSubject("");
  };

  return (
    <div className="">
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
          width: "100%",
          height: "55vh",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="text-center font-semibold text-white text-4xl md:text-7xl">
            <h1 className="mb-7">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <section className="px-6 py-4 mx-auemail text-black rounded-md dark:bg-gray-800 mt-4">
          <div className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              style={{ boxShadow: "0 0 10px grey" }}
              className="flex cursor-pointer items-center p-8 px-10 text-black shadow-md border border-gray-100 rounded-md dark:text-gray-800 hover:shadow-2xl hover:bg-green-200"
            >
              <div className="w-1/3 flex justify-center items-center">
                <img
                  className="w-24 h-24"
                  src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                  alt="location-icon"
                />
              </div>

              <div className="flex flex-col pl-2 md:pl-4">
                <span
                  style={{ color: "#030f27" }}
                  className="mt-2 mb-2 font-medium text-2xl"
                >
                  Address
                </span>

                <span
                  style={{ color: "#778696" }}
                  className="mt-2 mb-4 font-normal text-lg"
                >
                  Ameritrunk Building, California, United States - 92680
                </span>
              </div>
            </div>
            <div
              style={{ boxShadow: "0 0 10px grey" }}
              className="flex xl:flex-row flex-col cursor-pointer items-center p-8 px-10 text-black shadow-md border border-gray-100 rounded-md dark:text-gray-800 hover:shadow-2xl hover:bg-green-200"
            >
              <div className="w-1/3 flex justify-center items-center">
                <img
                  className="w-24 h-24"
                  src="https://cdn-icons-png.flaticon.com/512/126/126509.png"
                  alt="call-icon"
                />
              </div>

              <div className="flex flex-col pl-2 md:pl-4">
                <span
                  style={{ color: "#030f27" }}
                  className="mt-2 mb-2 font-medium text-2xl"
                >
                  Get in Touch
                </span>
                <a href="tel:213-562-5625">
                  <span
                    style={{ color: "#778696" }}
                    className="mt-2 mb-4 font-normal text-lg"
                  >
                    Phone : 213-562-5625
                  </span>
                </a>
                <a href="tel:+94766300033">
                  <span
                    style={{ color: "#778696" }}
                    className="mt-2 mb-4 font-normal text-lg"
                  >
                    Mail : hospital@example.com
                  </span>
                </a>
              </div>
            </div>
            <div
              style={{ boxShadow: "0 0 10px grey" }}
              className="flex flex-col xl:flex-row cursor-pointer items-center p-8 px-10 text-black shadow-md border border-gray-100 rounded-md dark:text-gray-800 hover:shadow-2xl hover:bg-green-200"
            >
              <div className="w-1/3 flex justify-center items-center">
                <img
                  className="w-24 h-24"
                  src="https://cdn-icons-png.flaticon.com/512/546/546394.png"
                  alt="mail-icon"
                />
              </div>

              <div className="flex flex-col pl-2 md:pl-4">
                <span
                  style={{ color: "#030f27" }}
                  className="mt-2 mb-2 font-medium text-2xl text-center"
                >
                  OPD Hours
                </span>

                <a href="/contact">
                  <span
                    style={{ color: "#778696" }}
                    className="mt-2 mb-4 font-normal text-sm"
                  >
                    Mon to Fri : 10am to 6pm
                  </span>
                  <br />
                  <span
                    style={{ color: "#778696" }}
                    className="mt-2 mb-4 font-normal text-sm"
                  >
                    Sat & Sun : 12am to 3pm
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2">
            <div>
              <div className="my-12 md:mx-10 ">
                <form onSubmit={handleContactSubmit}>
                  <div className="-ml-2 pt-2 md:flex">
                    <div className="w-full mx-2">
                      <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                        Name
                      </label>

                      <input
                        className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="-ml-2 pt-2 md:flex">
                    <div className="w-full mx-2">
                      <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                        Email
                      </label>

                      <input
                        className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                        placeholder="Your Email"
                        required
                        id="email"
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="-ml-2 pt-2 md:flex">
                    <div className="w-full mx-2">
                      <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                        Subject
                      </label>

                      <input
                        className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        placeholder="Subject"
                        required
                        id="subject"
                        type="text"
                        name="subject"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                      Message
                    </label>

                    <textarea
                      onChange={(e) => setmailBody(e.target.value)}
                      value={mailBody}
                      name="mailBody"
                      id="mailBody"
                      placeholder="Message"
                      required
                      className="block w-full h-40 px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    ></textarea>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="px-9 py-4 transition-colors duration-700 ease-in-out font-semibold text-white transform bg-blue-500 rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-700"
                      // style={{ zIndex: "-56" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* .......MAP......... */}
            <div className="md:p-5 p-0 mt-24 mb-24">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0782335331664!2d79.9156561142676!3d6.881231220811446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a0af53b58a5%3A0xc01bc6553d80f92f!2s341%20Pitakotte%20-%20Talawatugoda%20Rd%2C%20Sri%20Jayawardenepura%20Kotte%2010100%2C%20Sri%20Lanka!5e0!3m2!1sen!2sbd!4v1635093969856!5m2!1sen!2sbd"
                title="office address"
                style={{ border: "0", width: "100%", height: "75vh" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            {/* .......... */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
