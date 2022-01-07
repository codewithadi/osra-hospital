import React, { useState, useEffect } from "react";
import SingleDoctor from "./SingleDoctor";
import Select from "react-select";
import axios from "axios";
import Loading from "../Loading/Loading";
import { demoData } from "../DemoData/demodata";
import {demodept} from "../DemoData/demodept"

const Doctor = () => {
  const [loading, setloading] = useState(true);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState();
  const [selectedDept, setSelectedDept] = useState(null);
  const [doctors, setDoctors] = useState();
  const [nodoctor, setNodoctor]=useState(false)

  const handleChangeDept = (selectedDept) => {
      setDoctors(demoData)
   
    setSelectedDept(selectedDept);
    if(selectedDept){
        var searchdept=selectedDept.label.toLowerCase().replace(/ /g,"")
        if(searchdept=="all"){
            
            setDoctors(demoData)
        }else{
        
        console.log(searchdept)
        const searcheddoctor = doctors.filter((doctor) => {
            return doctor.name
              .toLowerCase()
              .replace(/ /g, "")
              .includes(searchdept);
          });
          setDoctors(demoData);
        }
        
    }
  };
 
  useEffect(() => {
    const getDept = async () => {
      setloading(true);
      
      setDepartment(demodept);
      setDoctors(demoData);
     
      setloading(false);
    };
    getDept();
  }, []);
  const handleSubmit = () => {
    setDoctors(demoData)

    if (search !== "") {
      const searcheddoctor = doctors.filter((doctor) => {
        return doctor.name
          .toLowerCase()
          .replace(/ /g, "")
          .includes(search.toLowerCase().replace(/ /g, ""));
      });
      if(searcheddoctor.length === 0){
        setNodoctor(true)
      setDoctors(demoData)
      }else{
        setNodoctor(false)
        setDoctors(searcheddoctor);
      }
     
      
    }else{
        setDoctors(demoData)
    }
   
  };
  const handleSearch =(e) => {
      setSearch(e.target.value)
      let searchvalue=e.target.value
      if(searchvalue.length===0){
          setDoctors(demoData)
      }
    }

  return (
    <div className="py-2 px-2 flex flex-col justify-center items-center">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center py-4">
          <Loading />
        </div>
      ) : (
        <>
          <div className="w-full md:w-3/4 flex flex-col gap-2 md:flex-row mb-5">
            <input
              className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={handleSearch}
              value={search}
              type="text"
              name="search"
              id="search"
              placeholder="Enter Doctor Name"
              required
            />
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="px-4 py-2 transition-colors duration-700 ease-in-out font-semibold text-white transform bg-blue-500 rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-700"
              >
                Search
              </button>
            </div>
            <div className="w-full md:w-1/3 mb-2 ml-2 flex justify-center items-center">
              <Select
                value={selectedDept}
                onChange={handleChangeDept}
                options={department}
                placeholder="Select Department"
              />
            </div>
          </div>
          {nodoctor && <div><h1>No Doctors of your searched name</h1></div>}
          <div className="grid grid-cols-1 justify-center items-center justify-items-center px-2 md:px-10 gap-4 md:grid-cols-4">
            {doctors && doctors.map((doc, index) => (
              <SingleDoctor
                key={index}
                imgUrl={doc.imgUrl}
                name={doc.name}
                position={doc.position}
                mobno={doc.mobno}
                email={doc.email}
                linkto={doc.linkto}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Doctor;
