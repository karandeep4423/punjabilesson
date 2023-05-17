import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleShow = () => {
    setOpen(!open);
  };

  return (
    <div className=" ">
      <nav className=" flex justify-between h-20 px-4 xl:px-0 max-w-screen-xl m-auto     ">
        <Link href="/">
          <div className="my-5 text-2xl font-medium h-fit w-[180px] border-4 px-0 text-center border-black">
            <h1>Punjabi School</h1>
          </div>
        </Link>
        <div className="flex items-center lg:hidden">
          <button onClick={handleShow}>{open?<Image alt="icon" width={35} height={35} src="/menu.png"></Image>:<Image alt="close icon" width={35} height={35} src="/close.png"></Image>}</button>
        </div>
        <div
          className={`lg:space-x-6 gap-y-4 text-lg  absolute  justify-between flex flex-col items-center lg:flex-row  z-50  lg:static  lg:w-auto lg:py-0 pb-6  w-full left-0 ${
            open ? "hidden lg:flex " : "top-[64px] bg-indigo-100 pt-6"
          }`}
        >
          <Link onClick={handleShow} href="/">Home</Link>
          <Link onClick={handleShow} href="/Gurbani">Gurbani Lesson</Link>
          <Link onClick={handleShow} href="/Booking">Book Lesson</Link>
          <Link onClick={handleShow} href="/About">About us</Link>
          <Link onClick={handleShow} href="/Contact">Contact us</Link>
          <div className="hidden lg:flex space-x-3">
            <Link href="/Booking">
              <button className=" font-medium px-4 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import Link from "next/link";

// const Navbar = () => (
//   <nav className="flex items-center justify-between flex-wrap bg-white p-6">
//     <div className="flex items-center flex-shrink-0 text-indigo-500 mr-6">
//       <Link  className="font-semibold text-xl tracking-tight" href="/">
//         my web
//       </Link>
//     </div>
//     <div className="block lg:hidden">
//       <button className="flex items-center px-3 py-2 border rounded text-indigo-500 border-indigo-500 hover:text-white hover:bg-indigo-500">
//         <svg
//           className="fill-current h-3 w-3"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <title>Menu</title>
//           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//         </svg>
//       </button>
//     </div>
//     <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//       <div className="text-sm lg:flex-grow">
//         <Link className="block mt-4 lg:inline-block lg:mt-0 text-indigo-500 hover:text-indigo-800 mr-4" href="/about">

//             About

//         </Link>
//         <Link className="block mt-4 lg:inline-block lg:mt-0 text-indigo-500 hover:text-indigo-800 mr-4" href="/services">
//             Services
//         </Link>
//         <Link className="block mt-4 lg:inline-block lg:mt-0 text-indigo-500 hover:text-indigo-800 mr-4" href="/contact">
//             Contact
//         </Link>
//       </div>
//       <div>
//         <Link href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 lg:mt-0">
//             Button
//         </Link>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;
