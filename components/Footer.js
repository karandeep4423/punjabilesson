import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="bg-black text-lg xl:text-xl   rounded-t-3xl  ">
        <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
          <div className="flex flex-col space-y-4 pt-10 w-64">
            <h1 className="text-white font-medium text-xl border-4 border-white w-fit px-1">
              {" "}
              Punjabi School
            </h1>
            <p className="text-gray-300 font-medium">
            We are a team of qualified teachers with industry-proven years of
            experience. Book a class according to your availability to open new
            door of language.
            </p>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h1 className="text-xl font-medium text-white">Navigation</h1>
            <Link href="/index">Home</Link>
            <Link href="/Booking">Book Lesson</Link>
            <Link href="/Gurbani">Gurbani Lesson</Link>
            <Link href="/About">About us</Link>
            <Link href="/Contact">Contact us</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h1 className="text-xl font-medium text-white">Services</h1>
            <Link href="/Booking#book_lesson">Book a Lesson</Link>
            <Link href="/Booking#Group_class">Group Class</Link>
            <Link href="/Booking#Buy_hours">Buy Hours Pack</Link>
            <Link href="/Booking#subscription">Get Subscription</Link>
          </div>
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h1 className="text-xl text-white font-medium">Contact us</h1>
            <p>Bachiwind, Amritsar</p>
            <a href="mailto:bachiwind3@gmail.com">bachiwind3@gmail.com</a>
            <a href="tel:+918727989814">+918727989814</a>
          </div>
        </div>
        <p className="text-center text-gray-300 py-6">
          Copyright ©2023 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
