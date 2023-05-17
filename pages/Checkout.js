import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Image from "next/image";
const Checkout = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [transactionId, setTransactionId] = useState(null);
  const [message, setMessage] = useState("");
  const [slot, setSlot] = useState(null);
  const [packId, setPackId] = useState(null);
  const [slotTimezone, setSlotTimezone] = useState(null);
  const [lessonType, setLessonType] = useState(null);
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Lesson/addLessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
        slot: slot,
        slotTimezone: slotTimezone,
        lessonType: lessonType,
        LessonPackId: packId,
      }),
    });
    const result = await res.json();
    if (result.message == "success") {
      setEmail("");
      setName("");
      setMessage("");
      updateLessonPack(result?.lessons._id);
      toast.success("Your lesson has been booked successfully");
      router.push("/Booking");
      return;
    } else {
      toast.error("Server error, Try again");
    }
  };

  const updateLessonPack = async(Id)=>{
    const response = await fetch(`/api/LessonPack/updateLessonPack?Id=${packId}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        lessonId:Id,
        }),
    });
    const result = await response.json();
    return;
  }
  const paypalSubmit = async () => {
    const res = await fetch("/api/Lesson/addLessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
        slot: slot,
        slotTimezone: slotTimezone,
        lessonType: lessonType,
      }),
    });
    const result = await res.json();
    if (result.message == "success") {
      setEmail("");
      setName("");
      setMessage("");
      toast.success("Your lesson has been booked successfully");
      router.push("/Booking");
      return;
    } else {
      toast.error("Server error, Try again");
    }
  };

  useEffect(() => {
    setSlot(router.query.schdule);
    setSlotTimezone(router.query.timezone);
    setLessonType(router.query.lesson);
    setPackId(router.query.packId);
    if (transactionId) {
      paypalSubmit();
    }
  }, [router.query.schdule&&router.query.timezone]);

  const PayPal = (e) => {
    e.preventDefault();
    MySwal.fire({
      html: (
        <PayPalScriptProvider
          options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          }}
        >
          <PayPalButtons
            className="mt-10"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: router.query.lesson == "single" ? 10 : 7,
                    },
                    application_context: {
                      shipping_preference: "NO_SHIPPING",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              await setTransactionId(details.id);
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
      <div className="m-auto max-w-screen-xl">
        <div className="flex items-center justify-center">
          <h1 className=" relative text-center mt-14 text-5xl font-bold">
            Checkout
          </h1>
          <div className="bg-sky-400 mt-14 absolute   mix-blend-multiply filter blur-2xl h-8 w-56 "></div>
        </div>
        <form
          onSubmit={router.query.lesson == "Pack" ? handleSubmit : PayPal}
          className="h-fit   shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] min-w-fit mt-8 rounded-3xl mx-4  sm:mx-32 md:40 lg:mx-56 p-3  md:p-10 mb-16 border-2 border-gray-200"
        >
          <div className="flex gap-3 ml-1 mt-3 mb-3 md:mt-0 justify-center  items-center text-xl ">
            <Image className="w-12 h-12" alt="checkout" src="checkout.png"></Image>
            <h1>
              {router.query.schdule}
              {router.query.timezone}
            </h1>
          </div>
          <div data-aos="fade-up" className="flex pt-3  gap-2">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                marginTop: "-12px",
              }}
            ></Player>
            <div className="relative  z-0 w-full mb-6 group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="floating_email"
                className="block background-transparent overflow-hidden py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <label
                for="floating_email"
                className=" peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-2">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_Fuxw3k.json"
              style={{
                height: "70px",
                width: "70px",
                marginTop: "-12px",
                borderRadius: "50%",
              }}
            ></Player>
            <div class="relative z-0 w-full mb-6 group">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="floating_first_name"
                class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
          </div>
          <div data-aos="fade-up" className="w-full pl-0 sm:pl-[80px] ">
            <textarea
              placeholder="Write additional notes"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-xl w-full outline-sky-600 hover:outline-offset-2 h-32 p-2  text-xl border-2 "
            ></textarea>
          </div>
          <div data-aos="fade-up" className="flex  pt-10 justify-center">
            <button className="text-lg font-medium w-3/4  py-2 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              {router.query.lesson == "Pack"
                ? "Book Lesson"
                : router.query.lesson == "single"
                ? "Book Lesson $10 "
                : "Group Lesson $7"}
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default Checkout;
