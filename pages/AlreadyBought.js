import React, { useState} from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import ClipLoader from "react-spinners/ClipLoader";

const AlreadyBought = () => {
  const [lessonValue, setLessonValue] = useState(null);
  const [resData, setResData] = useState(null);
  const [btnLoader, setBtnLoader] = useState(false);


  const fetchLesson = async () => {
    setBtnLoader(true);
    const res = await fetch(`/api/LessonPack/findLessonPack?email=${lessonValue}`);
    const data = await res.json();
    setResData(data);
    setBtnLoader(false);
  };

  return (
    <div className="max-w-screen-xl m-auto ">
    <div className="my-12">
      <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
        Book Lesson
      </h1>
      <p className="text-center text-base font-medium m-2">
        Book a lesson with the email that you used to buy a lesson pack.
      </p>
    </div>
    <div className="flex flex-col mx-4 gap-4 justify-center items-center  my-14">
      <div className="flex flex-row ">
        <div className="-mt-0 absolute">
          <Player
            className="w-16 h-16 "
            autoplay
            loop
            src="https://lottie.host/3c0747d6-bc85-436f-b6cd-b6a9cc8f66fd/U06LFwTrSo.json"
          ></Player>
        </div>
        <input
          className="w-[350px] sm:w-[500px] text-xl h-16 sm:text-2xl focus:shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] focus:outline-none focus:border-none bg-blue-100  rounded-3xl border-2 border-blue-400 pl-16 pr-6  sm:pr-4 "
          value={lessonValue}
          type="search"
          onChange={(e) => setLessonValue(e.target.value)}
          placeholder="Find your pack with email"
        ></input>
      </div>
      {btnLoader == true ? (
          <button
            onClick={fetchLesson}
            className="mt-4 text-xl cursor-not-allowed font-medium w-56 h-12 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <ClipLoader className="mt-1" color="white" size={28} />{" "}
          </button>
        ) : (
          <button
            onClick={fetchLesson}
            className="mt-4 text-xl font-medium w-56 h-12 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            Find Pack
          </button>
        )}
    </div>
    {resData?.lesson.length !=0? (
      resData?.lesson.map((slot, index) => (
        <div key={index} className=" mb-16 shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] sm:mx-14 md:mx-20 lg:mx-24 mx-6  p-4  md:px-10 lg:px-16 rounded-xl ">
          <h1 className="text-center text-xl font-bold">Pack details</h1>
          <div
            className="mt-4 break-words rounded-2xl grid  grid-cols-1 sm:grid-cols-2  justify-center  items-center gap-4 text-lg"
          >
            <h1>
              <span className="font-bold">Email: </span>
              {slot.email}
            </h1>
            <h1>
              <span className="font-bold">Name: </span>
              {slot.name.firstName} {slot.name.lastName}

            </h1>
            <h1>
              <span className="font-bold">Amount: </span>
              ${slot.amount}
            </h1>
            <h1>
              <span className="font-bold">Attented lesson: </span>
              {slot.lessons.length}
            </h1>
          </div>
          <div className="flex justify-center  items-center mt-4">
            {slot.lessons.length == 2 ?<div className="flex  flex-col gap-2"><h1 className="text-xl font-bold">You attented your all lessons</h1> <Link
              href={{
                pathname: "/Booking",
              }}
            >
              <button className=" px-16 text-lg font-medium  py-2 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Buy Pack
              </button>
            </Link></div>:
            <Link
              href={{
                pathname: "/Book_lesson",
                query: { lesson: "Pack", packId: slot._id },
              }}
            >
              <button className=" px-16 text-lg font-medium  py-2 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Book Lesson
              </button>
            </Link>}
          </div>
        </div>
      ))
    ) : (
      <div>
        <h1 className="text-4xl mx-4 text-center mb-16 text-black">There is no lesson pack that has been bought with this email.</h1>
      </div>
    )}
  </div>
  );
};

export default AlreadyBought;
