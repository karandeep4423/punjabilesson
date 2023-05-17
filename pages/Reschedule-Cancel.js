import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Player } from "@lottiefiles/react-lottie-player";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const Reschedule = () => {
  const [lessonValue, setLessonValue] = useState(null);
  const [resData, setResData] = useState(null);
  const [btnLoader, setBtnLoader] = useState(false);

  const fetchLesson = async () => {
    setBtnLoader(true);
    const res = await fetch(`/api/Lesson/getLesson?email=${lessonValue}`);
    const data = await res.json();
    setResData(data);
    setBtnLoader(false);
  };

  const cancelLesson = (id, email, name, slot, timezone, transactionId) => {
    Swal.fire({
      title: "Are you sure you want to cancel the lesson?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Cancelled!",
          "Your lesson has been cancelled successfully.",
          "success"
        );
        confirmCancelLesson(id, email, name, slot, timezone, transactionId);
      }
    });
  };

  const confirmCancelLesson = async (
    id,
    email,
    name,
    slot,
    timezone,
    transactionId
  ) => {
    const res = await fetch("/api/Lesson/cancelLesson", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        email,
        name,
        slot,
        timezone,
        transactionId,
      }),
    });
    const result = await res.json();
    if (result.message == "success") {
      fetchLesson();
      return;
    } else {
      toast.error("Server error, Try again");
    }
  };

  const completedLessonBtn = (id) => {
    Swal.fire({
      title: "Are you sure you want to mark the lesson as completed?",
      text: "You won't be able to reschedule, cancel, or attend this lesson!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes, mark it!",
    }).then((result) => {
      if (result.isConfirmed) {
        completedLessonReq(id, true);
        Swal.fire(
          "Cancelled!",
          "Your lesson has been marked as completed successfully.",
          "success"
        );
      }
    });
  };

  const completedLessonReq = async (id, val) => {
    const res = await fetch("api/Lesson/completedLesson", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        lessonCompleted: val,
      }),
    });
    const result = await res.json();
    if (result.message == "success") {
      fetchLesson();
      return;
    }
  };

  return (
    <div className="max-w-screen-xl m-auto ">
      <div className="my-12">
        <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          Reschedule lesson or cancel
        </h1>
        <p className="text-center text-base font-medium m-2">
          Find a lesson with the email that you used to book a lesson.
        </p>
      </div>
      <div className="flex flex-col mx-4 gap-4 justify-center items-center  my-12">
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
            placeholder="Find your lesson with email"
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
            Find Lesson
          </button>
        )}
      </div>
      {resData?.lesson.length != 0 ? (
        resData?.lesson.map((slot, index) => (
          <div
            key={index}
            className=" mb-16 shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]  sm:mx-14 md:mx-20 lg:mx-24 mx-6  p-4  md:px-10 lg:px-16  rounded-xl "
          >
            <h1 className="text-center text-xl font-bold">Lesson details</h1>
            <div className="mt-4 break-words rounded-2xl grid  grid-cols-1 sm:grid-cols-2  justify-center  items-center gap-4 text-lg">
              <h1>
                <span className="font-bold">Email: </span>
                {slot.email}
              </h1>
              <h1>
                <span className="font-bold">Name: </span>
                {slot.name}
              </h1>
              <h1>
                <span className="font-bold">Timezone: </span>
                {slot.slotTimezone}
              </h1>
              <h1>
                <span className="font-bold">Slot: </span>
                {slot.slot}
              </h1>
              <h1>
                <span className="font-bold">Lesson Type: </span>
                {slot.lessonType}
              </h1>
              <div className="flex">
                <span className="font-bold">Lesson completed :</span>
                <div
                  onClick={
                    slot.lessonCompleted == false
                      ? () => completedLessonBtn(slot._id)
                      : null
                  }
                  className={`${
                    slot.lessonCompleted == true
                      ? "bg-sky-600 cursor-not-allowed "
                      : "bg-gray-600 cursor-pointer"
                  }  ml-2 -mt-1 flex h-8 w-16  rounded-full transition-all duration-500`}
                >
                  <span
                    className={`h-6 w-6 m-auto bg-white rounded-full shadow-lg transition-all duration-500 ${
                      slot.lessonCompleted == true ? "ml-9" : "ml-1"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
            {slot.lessonCompleted == false ? (
              <div className="flex justify-center flex-col md:flex-row items-center mt-4 gap-4 md:gap-10">
                <Link
                  href={{
                    pathname: "/RescheduleLesson",
                    query: { id: slot._id },
                  }}
                >
                  <button className=" w-64 text-lg font-medium  py-2 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    Reschedule Lesson
                  </button>
                </Link>
                <button
                  onClick={() =>
                    cancelLesson(
                      slot._id,
                      slot.email,
                      slot.name,
                      slot.slot,
                      slot.slotTimezone,
                      slot.lessonType,
                      slot.transactionId
                    )
                  }
                  className="text-lg w-64  font-medium  py-2 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  Cancel Lesson
                </button>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>
          <h1 className="text-4xl mx-4 text-center mb-16 text-black">
            There is no lesson that has been booked with this email.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Reschedule;
