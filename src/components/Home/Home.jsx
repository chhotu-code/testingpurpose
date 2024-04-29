import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-blue-300  h-[80vh] xl:w-full lg:w-full rounded-xl my-5 sm:w-[120vh] md:w-[115vh] xs:w-[70vh]">
        <div className="flex flex-row  flex-wrap sm:w-full">
            <h1 className="text-3xl flex justify-center flex-col text-center font-extrabold lg:my-[10rem] md:mx-[12rem] lg:mx-[30rem] sm:ml-64 sm:mt-20  xs:ml-20 xs:flex xs:mt-0 " > Serarch Job Here</h1>
          <div className=" lg:h-40 md:w-[120vh] md:ml-2 bg-white lg:w-[85%] flex items-center lg:mx-28 md:mt-20 lg:-mt-[100px] -my-32 rounded-3xl  sm:w-[100%] sm:flex sm:mx-0 sm:-my-0 sm:h-20 sm:mt-10 sm:-ml-0  xs:mt-5 xs:bg-none xs:h-96 xs:ml-12 xs:p-5 ">
             <div className="flex justify-center items-center m-10 xs:flex xs:flex-col xs:mt-0 xs:p-0">
                  <div className="flex justify-center flex-col items-center xs:p-2">
                    <p className="text-2xl font-normal xs:flex-col xs:text-[20px]">Keyword</p>
                     <input type="text" placeholder="What are you looking for?"  className="lg:h-10 md:h-10  rounded-xl cursor-pointer "/>
                  </div>
                  <div className="flex justify-center flex-col p-10 xs:p-2">
                    <p className="text-2xl font-normal xs:text-[20px]">Job Category</p>
                     <input type="text" placeholder="Choose an Sector" className="lg:h-10 md:h-10  rounded-xl cursor-pointer" />
                  </div>
                  <div className="flex justify-center flex-col py-10 xs:p-2">
                    <p className="text-2xl font-normal xs:text-[20px]">job Location</p>
                     <input type="text" placeholder="Where do you want do work?"  className="lg:h-10 md:h-10  rounded-xl cursor-pointer" />
                  </div>
                  <div className="flex justify-center flex-col  lg:px-40 md:flex md:flex-col mt-52 md:-ml-96 lg:ml-0 lg:-mt-0 sm:-ml-96 xs:-mt-0 ">
                    <button className="bg-blue-500 p-5 px-7 text-3xl rounded-3xl border xs:h-10 xs:text-[25px] xs:p-1 xs:px-4 xs:py-0">Search</button>
                  </div>
             </div>
         
          </div>
        </div>
    </div>
  );
}
