import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import AOS from "aos";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Booking() {
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1700,
      easing: "ease-in-out-back",
      delay: 100,
      once: true,
    });
    if(email&&amount&&name){
      BuyLessonPack();
    }
  }, [email,amount,name]);
  const BuyLessonPack = async () => {
    const res = await fetch("/api/LessonPack/addLessonPack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        amount,
      }),
    });
    const result = await res.json();
    if (result.message == "success") {
      toast.success("Lesson pack has been bought successfully");
      return;
    } else {
      toast.error("Server error, Try again");
    }
  };

  const buyPack = () => {
    MySwal.fire({
      title: "Buy Pack",
      html: (
        <PayPalScriptProvider
          options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: 45,
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              await setEmail(details.payer.email_address);
              await setName({
                firstName: details.payer.name.given_name,
                lastName: details?.payer.name.surname,
              });
              await setAmount(details.purchase_units[0].amount.value);
            }}
          />
        </PayPalScriptProvider>
      ),
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <div>
      <div className="my-12">
        <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          Choose your plan
        </h1>
        <p className="text-center text-base font-medium m-2">
          That is right for you
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="max-w-screen-xl text-lg xl:text-xl  m-auto grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 "
      >
        <div
          data-aos="fade-up"
          id="book-lesson"
          className="text-gray-600 bg-slate-200 justify-center h-fit py-10  gap-y-2 flex flex-col items-center rounded-xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]"
        >
          <h2 data-aos="fade-up" className="text-5xl text-center  font-bold">
            Book Lesson
          </h2>
          <div data-aos="fade-up">
            <p className=" px-3">
              Take your first step towards a new world of language and unlock
              endless possibilities.
            </p>
          </div>
          <p data-aos="fade-up" className="text-5xl  font-bold">
            $10
            <span className="font-thin text-base sm:text-lg xl:text-xl ">
              /per lesson
            </span>
          </p>
          <Link
            href={{ pathname: "/book-lesson", query: { lesson: "single" } }}
          >
            <button className="mt-4 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              Get Started
            </button>
          </Link>
          <Link
            className="text-lg mb-3 underline decoration-sky-500 underline-offset-1 hover:text-sky-600 "
            href={"/reschedule-cancel-lesson"}
          >
            Reschedule or cancel lesson
          </Link>
          <div
            data-aos="fade-up"
            className="flex text-black flex-col space-y-3 px-8 font-normal  "
          >
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Attend a lesson on zoom</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Shift another tutor after an unsatisfactory lesson</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>The duration of a lesson is an hour</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get material to boost learning</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Reschedule a lesson before 4 hours</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Clear your doubts after the lesson</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get a confirmation after booking</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get track of your progress</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          id="buy-hours"
          className="text-gray-600  bg-blue-100 justify-center h-fit py-10 gap-y-2 flex flex-col items-center rounded-xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]"
        >
          <h2 data-aos="fade-up" className="text-5xl text-center  font-bold">
            Buy Pack
          </h2>
          <p data-aos="fade-up" className="text-lg px-3">
            In this pack of 5 hours, you would get 10% off the usual price.
            After purchasing the pack, you can book your first lesson.
          </p>
          <p data-aos="fade-up" className="text-5xl  font-bold">
            $45
            <span className="text-base sm:text-lg xl:text-xl font-thin ">
              /per pack
            </span>
          </p>
          <button
            onClick={buyPack}
            className="mt-4 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            Get Started
          </button>
          <Link
            className="text-lg mb-0 underline decoration-sky-500 underline-offset-1 hover:text-sky-600 "
            href={"/already-bought-lessons-pack"}
          >
            Already bought pack
          </Link>
          <Link
            className="text-lg mb-3 underline decoration-sky-500 underline-offset-1 hover:text-sky-600 "
            href={"/reschedule-cancel-lesson"}
          >
            Reschedule or cancel lesson
          </Link>
          <div
            data-aos="fade-up"
            className="flex  text-black flex-col space-y-3 px-8 font-normal"
          >
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Attend a lesson on zoom</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Shift another tutor after an unsatisfactory lesson</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>The duration of a lesson is an hour</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get material to boost learning</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Reschedule a lesson before 4 hours</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Clear your doubts after the lesson</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get a confirmation after booking</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get track of your progress</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get discount of 10%</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get priority responses to your doubts.</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          id="group-class"
          className="text-gray-600 bg-violet-100	justify-center h-fit py-10 gap-y-2 flex flex-col items-center rounded-xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]"
        >
          <h2 data-aos="fade-up" className="text-5xl text-center font-bold">
            Group Class
          </h2>
          <p data-aos="fade-up" className=" px-3">
            Group lessons will be held based on the number of students who can
            attend at once, and we use pooling to determine who is available.
          </p>
          <p data-aos="fade-up" className="text-5xl  font-bold">
            $7
            <span className="text-base sm:text-lg xl:text-xl font-thin ">
              /per lesson
            </span>
          </p>
          <Link href={{ pathname: "/book-lesson", query: { lesson: "group" } }}>
            <button className="mt-4 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              Get Started
            </button>
          </Link>
          <Link
            className="text-lg mb-3 underline decoration-sky-500 underline-offset-1 hover:text-sky-600 "
            href={"/reschedule-cancel-lesson"}
          >
            Reschedule or cancel lesson
          </Link>
          <div
            data-aos="fade-up"
            className="text-black flex flex-col space-y-3 px-8 font-normal"
          >
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Attend a lesson on zoom</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Shift another tutor after an unsatisfactory lesson</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>The duration of a lesson is an hour</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get material to boost learning</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Reschedule a lesson before 4 hours</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Clear your doubts after the lesson</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get a confirmation after booking</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get track of your progress</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get the most affordable lesson</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <Image
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="/homePage/check.png"
              ></Image>
              <p>Get a chance to interact with other learners</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="subscription"
        className="flex justify-center items-center mt-10 sm:mt-0 "
      >
        <div className="max-w-screen-xl  border-2 relative rotate-3 sm:rotate-3 flex flex-col gap-5 bg-sky-600 text-white  border-white  m-3 mb-16 sm:m-16 p-8 md:p-16">
          <h2 className="text-center font-bold text-3xl sm:text-5xl">
            Subscribe for 6 months or until desired level reached, with flexible
            options.{" "}
          </h2>
          <p className="px-2 font-normal text-xl">
            With this subscription, you can learn all four modules - speaking,
            listening, reading, and writing - or focus on one until you reach
            your desired level. Personalized learning for you.
          </p>
          <div className="flex justify-center items-center">
            <Link href="/contact-us">
              <button className="mt-2 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-xl border-2 absolute flex flex-col gap-5 bg-black text-white border-white m-3 mb-16 sm:m-16 p-8 md:p-16">
          <h2
            data-aos="fade-up"
            className="text-center text-gray-200 font-bold text-3xl sm:text-5xl"
          >
            Subscribe for 6 months or until desired level reached, with flexible
            options.{""}
          </h2>
          <p
            data-aos="fade-up"
            className="px-2 font-normal text-xl text-gray-300"
          >
            With this subscription, you can learn all four modules - speaking,
            listening, reading, and writing - or focus on one until you reach
            your desired level. Personalized learning for you.
          </p>
          <div data-aos="fade-up" className="flex justify-center items-center">
            <Link href="/contact-us">
              <button className="mt-2 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
