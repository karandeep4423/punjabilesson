import React, { useEffect} from "react";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Player, ControlBar } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Contact from "./contact-us";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1700,
      easing: "ease-in-out-back",
      delay: 100,
      once: true,
    });
  }, []);
  ("eslint-disable");
  const { ref: first, inView: firstSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
  });
  const { ref: second, inView: secondSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
  });
  const { ref: third, inView: thirdSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
  });
  const { ref: fourth, inView: fourthSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
  });
  const { ref: fifth, inView: fifthSectionIsVisible } = useInView({
    rootMargin: "-200px 0px",
  });
  ("eslint-enable");
  return (
    <div>
      <Head>
        <title>Learn Punjabi Language & Gurbani in English - Punjabi Lesson</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Discover the best way to learn Punjabi language and Gurbani in English. Join our experienced tutors for affordable Punjabi language classes and lessons."/>
      </Head>
      <div className="relative max-w-screen-xl m-auto   w-full h-fit  flex flex-col md:flex-row px-10 items-center  ">
        <div className="absolute sm:left-10 mix-blend-multiply w-11/12 h-96  top-28 bg-gradient-to-r from-blue-300 via-purple-300  to-yellow-200 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
          {" "}
        </div>
        <div>
          <h1 className="text-5xl text-gray-700 text-center font-bold">
            Learn <span className="text-sky-600">Punjabi language </span>and get
            <span className="text-pink-400"> Gurbani Classes of </span>
            with experienced tutors of{" "}
            <span className="text-cyan-500">Punjabi Lesson.</span>
          </h1>
          <p data-aos="fade-up" className="text-xl mt-8">
            We are a team of qualified teachers with industry-proven years of
            experience. Book a class according to your availability to open new
            door of language.
          </p>
        </div>
        <div>
          <Image
            src="/hero.png"
            className="w-[2000px] h-[500px]"
            width={1000}
            height={1000}
            alt="learn punjabi language"
          ></Image>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="md:m-10 m-6  rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] relative   ">
          <div className="flex  items-center justify-center">
            <div data-aos="fade-up">
              <h2 className=" relative text-gray-700 mt-8 text-center text-5xl font-bold">
                About us
              </h2>
            </div>
            <div className="bg-sky-400 mt-8 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
          </div>
          <div className="absolute mix-blend-multiply w-11/12 h-44 left-10 top-28 bg-gradient-to-r from-blue-300 via-purple-300  to-yellow-200 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
            {" "}
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center"
          >
            <p className="text-lg xl:text-xl md:px-10 p-4 md:p-0 md:pt-5 md:pb-8">
              Our mission is to promote Punjabi language and culture and provide
              high-quality spiritual education to students around the world. Our
              team of expert tutors is dedicated to helping students achieve
              their learning objectives in a supportive and encouraging
              environment. We started this school with the aim of widening the
              reach of Punjabi language and culture worldwide and making it
              accessible to the upcoming generations. Our purpose is not to earn
              money but to make our classes affordable so that we can teach as
              many students as possible and fulfil our goals. We are committed
              to providing high-quality education and personalized guidance to
              our students. We believe that learning is a lifelong journey, and
              we are dedicated to supporting our students in their learning
              objectives at every stage of their journey.
            </p>
            <div className="flex  mb-10 justify-center">
              <Link href="/About">
                <button className="text-xl font-medium px-14 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  Know more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl m-auto">
        <div className="flex  items-center justify-center">
          <div data-aos="fade-up">
            <h2 className="text-gray-700 relative mt-12 text-center mx-3 text-5xl font-bold">
              Why Punjabi Lesson
            </h2>
          </div>
          <div className="bg-sky-400 mt-12 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="text-lg xl:text-xl grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 p-6 md:p-10">
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/target.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">Our aim</h3>
            <p>
              At Punjabi Lesson, our aim is to make Punjabi language and culture
              accessible worldwide. Our qualified teachers offer personalized
              and flexible classes to preserve our heritage and open new
              opportunities for students. Join us in our mission to keep Punjabi
              alive for generations to come.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/dollar.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Budget friendly
            </h3>
            <p>
              We understand that learning a new language can be expensive, which
              is why we strive to keep our classes affordable and accessible to
              everyone. We believe that learning Punjabi should not be a
              financial burden, and we are committed to making it accessible to
              everyone.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/calendar.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              24/7 availability
            </h3>
            <p>
              Punjabi Lesson offers 24/7 availability for our classes, allowing
              students and working professional to schedule and attend classes
              at their convenience from anywhere in the world. Our online
              platform is flexible and easy to use, accommodating busy schedules
              and different time zones.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/material.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Quality material
            </h3>
            <p>
              Our Punjabi Lesson provides high-quality, comprehensive and
              engaging learning materials including multimedia resources, study
              guides, and supplementary exercises. Our experienced teachers
              offer personalized support to help students achieve their full
              potential.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/replacement.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Replacement{" "}
            </h3>
            <p>
              At Punjabi Lesson, we offer a tutor replacement policy at no extra
              cost, allowing students to switch to a different tutor if they
              feel their current tutor is not the right fit. We understand the
              importance of finding the right tutor to achieve your learning
              goals.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/team.png"
              height={140}
              width={140}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Expert team
            </h3>
            <p>
              We are proud to have a team of expert tutors who are native
              Punjabi speakers and passionate about teaching Punjabi language
              and spirituality. Our tutors have years of experience in their
              respective fields and are dedicated to providing our students with
              the highest quality of instruction.{" "}
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/track.png"
              height={140}
              width={140}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Track progress{" "}
            </h3>
            <p>
              Tracking student progress is essential to ensuring that our
              students make progress in their language and spiritual learning
              journeys. Our expert tutors use various assessment methods to
              track student progress, providing regular feedback and progress
              reports to help students achieve their learning goals.{" "}
            </p>
            <p />
          </div>
          <div
            data-aos="fade-up"
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/homePage/doubt2.png"
              height={200}
              width={220}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Doubt clear session{" "}
            </h3>
            <p>
              At Punjabi Lesson, we understand that learning a new language or
              exploring spirituality can be challenging, and that is why we
              offer doubt-clearing sessions to our students. Our expert tutors
              provide personalised support, answering questions and clarifying
              doubts after class or anytime students need help.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black  text-white">
        <div className="flex items-center justify-center">
          <h2 className=" relative mt-16 text-center text-5xl font-bold">
            How Punjabi Lesson works
          </h2>
          <div className="bg-sky-400 mt-16 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="flex text-lg xl:text-xl max-w-screen-xl m-auto  justify-center items-center mt-10 flex-col">
          <div>
            <span className=" text-black absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white z-10  rounded-full h-10 w-10">
              {" "}
              1
            </span>
          </div>
          <div
            ref={first}
            className={
              firstSectionIsVisible
                ? " rounded-xl opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
                : "rounded-xl opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
            }
          >
            <Image
              className="m-8  bg-gray-700  rounded-xl"
              src="/homePage/calendar3.png"
              width={150}
              height={150}
              alt="join school"
            ></Image>
            <div>
              <h3 className="text-3xl px-3 text-center font-bold">
                Choose Your Availability
              </h3>
              <p className="lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                The first step to joining our Punjabi language or spiritual
                classes is to choose your availability. Simply choose the times
                that work best for you, and we will take care of the rest.
              </p>
            </div>
          </div>
          <div
            ref={second}
            className={
              secondSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="z-40  bg-white">
            <span
              ref={second}
              className={
                secondSectionIsVisible
                  ? "z-40 opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 z-100"
                  : "z-40 opacity-80 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              2
            </span>
          </div>
          <div
            ref={second}
            className={
              secondSectionIsVisible
                ? "rounded-xl opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
                : "rounded-xl  opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center border-2 border-white"
            }
          >
            <Image
              className="m-8  bg-gray-700  rounded-xl"
              src="/homePage/lock.png"
              width={150}
              height={150}
              alt="join school"
            ></Image>
            <div>
              <h3 className="text-3xl  text-center font-bold">
                Lock Your Hours
              </h3>
              <p className="lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                After you have chosen your availability for classes, the next
                step in our process is to lock in your hours. This is an
                important step that allows us to match you with the best
                possible tutor for your needs.
              </p>
            </div>
          </div>
          <div
            ref={third}
            className={
              thirdSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="h-0 w-0 z-50 	  bg-white">
            <span
              ref={third}
              className={
                thirdSectionIsVisible
                  ? "opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 "
                  : "	 opacity-80 absolute -mt-5 pt-1 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              3
            </span>
          </div>
          <div
            ref={third}
            className={
              thirdSectionIsVisible
                ? "rounded-xl opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
                : "rounded-xl opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  border-2 border-white"
            }
          >
            <Image
              className="m-8 bg-gray-700 rounded-xl"
              src="/homePage/dollar.png"
              width={150}
              height={150}
              alt="join school"
            ></Image>
            <div>
              <h3 className="text-3xl  text-center font-bold">Pay For Hours</h3>
              <p className="lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Once you have locked in your hours, it is time to pay for your
                selected lessons. We understand that online payments can be a
                concern for some people, which is why we use a secure payment
                gateway to ensure that your transaction is safe and secure.
              </p>
            </div>
          </div>
          <div
            ref={fourth}
            className={
              fourthSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="h-0 w-0 z-50 	  bg-white">
            <span
              ref={fourth}
              className={
                fourthSectionIsVisible
                  ? "opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 "
                  : "	 opacity-80 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              4
            </span>
          </div>
          <div
            ref={fourth}
            className={
              fourthSectionIsVisible
                ? "rounded-xl opacity-100 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center h-fit border-2 border-white"
                : "rounded-xl opacity-50 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center h-fit border-2 border-white"
            }
          >
            <Image
              className="m-8 bg-gray-700 rounded-xl"
              src="/homePage/mail.png"
              width={150}
              height={150}
              alt="join school"
            ></Image>
            <div>
              <h3 className="text-3xl text-center font-bold">
                Get Confirmation
              </h3>
              <p className="lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Once your money has been received, we will send you a
                confirmation email. This email verifies the time and day of your
                session and acts as confirmation that your lesson has been
                successfully scheduled.
              </p>
            </div>
          </div>
          <div
            ref={fifth}
            className={
              fifthSectionIsVisible
                ? "w-1 h-24 relative opacity-100  bg-white"
                : "w-1 h-24 relative opacity-50  bg-white"
            }
          ></div>
          <div className="h-0 w-0 z-50 	  bg-white">
            <span
              ref={fifth}
              className={
                fifthSectionIsVisible
                  ? "opacity-100 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10 "
                  : "	 opacity-80 absolute pt-1 -mt-5 -ml-5 text-center text-xl bg-white  border-2 border-white text-black rounded-full h-10 w-10"
              }
            >
              5
            </span>
          </div>
          <div
            ref={fifth}
            className={
              fifthSectionIsVisible
                ? "rounded-xl opacity-100 mb-16 w-10/12 relative  flex flex-col lg:flex-row justify-center items-center  h-fit border-2 border-white"
                : "rounded-xl opacity-50 w-10/12 relative mb-16 flex flex-col lg:flex-row justify-center items-center h-fit border-2 border-white"
            }
          >
            <Image
              className="m-8 bg-gray-700 rounded-xl"
              src="/homePage/laptop.png"
              width={150}
              height={150}
              alt="join school"
            ></Image>
            <div>
              <h3 className="text-3xl px-3 text-center font-bold">
                Get ready for lesson
              </h3>
              <p className="lg:pr-4 p-4 sm:pb-10 sm:px-10 lg:p-0 lg:py-4">
                Congratulations! You have completed the booking process and are
                now ready to start your journey towards learning Punjabi or
                spiritual growth with Punjabi Lesson. It is time to get ready
                for your lesson and make the most out of your time with our
                expert tutors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="flex items-center justify-center">
          <div data-aos="fade-up">
            <h2 className=" relative text-gray-700 text-center mx-3 mt-16 text-5xl font-bold">
              What our students say
            </h2>
          </div>
          <div className="bg-sky-400 mt-16 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 m-10 ">
          <div data-aos="fade-up">
            <Player
              isFullscreen="false"
              controls={false}
              className="m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl w-full  "
              fluid={false}
              width={210}
              heigth="5%"
            >
              <source src="homePage/feedback1.mp4"></source>
              <ControlBar
                autoHide={false}
                isFullscreen="false"
                disableDefaultControls
              ></ControlBar>
            </Player>
          </div>
          <div data-aos="fade-up">
            <Player
              isFullscreen="false"
              controls={false}
              className="m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl w-full  "
              fluid={false}
              width={210}
              heigth="5%"
            >
              <source src="homePage/feedback2.mp4"></source>
              <ControlBar
                autoHide={false}
                isFullscreen="false"
                disableDefaultControls
              ></ControlBar>
            </Player>
          </div>
          <div data-aos="fade-up">
            <Player
              isFullscreen="false"
              controls={false}
              className="m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl w-full  "
              fluid={false}
              width={210}
              heigth="5%"
            >
              <source src="homePage/feedback3.mp4"></source>
              <ControlBar
                autoHide={false}
                isFullscreen="false"
                disableDefaultControls
              ></ControlBar>
            </Player>
          </div>
        </div>
        <div data-aos="fade-up">
          <Swiper
            grabCursor={true}
            pagination={true}
            navigation={true}
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <Image
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language class"
                      src="/homePage/feedbackImg1.jpeg"
                    ></Image>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Zaryab</p>
                    <p className="text-gray-600">Birmingham,UK</p>
                    <p>
                      Punjabi Lesson teachers are cooperative and helpful with
                      myself when it comes to learning Punjabi; currently, we
                      are focusing on writing, and I am enjoying it.
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <Image
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language lesson"
                      src="/homePage/feedbackImg2.jpg"
                    ></Image>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Gaganpreet</p>
                    <p className="text-gray-600">Sydney, Australia</p>
                    <p>
                      Punjabi Lesson have good teachers. They are teaching
                      Punjabi to my son. My son likes to learn Punjabi from
                      them.
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <Image
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language course"
                      src="/homePage/DefaultImg.png"
                    ></Image>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Sunil</p>
                    <p className="text-gray-600">Vancouver, Canada</p>
                    <p>
                      Karandeep&apos;s material and approach to teaching was
                      very good. He&apos;s very patient and supportive; and was
                      available to answer any questions I had between lessons.{" "}
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <div className="max-w-screen-xl  border-2 relative rotate-3 sm:rotate-3 flex flex-col gap-5 bg-sky-600 text-white m-3 border-white sm:m-16 p-8 md:p-16">
          <h2 className="text-center font-bold text-5xl">
            {" "}
            Lets begin this journey without any further delay!
          </h2>
          <p className="px-2 font-normal text-xl">
            We guarantee satisfaction. If unhappy with first lesson, receive
            another tutor with same lesson, no questions asked.
          </p>
          <div className="flex justify-center items-center">
            <Link href="/Booking">
              <button className=" font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-xl border-2 absolute flex flex-col gap-5 bg-black text-white border-white m-3 sm:m-16 p-8 md:p-16">
          <h2
            data-aos="fade-up"
            className="text-center text-gray-200 font-bold text-5xl"
          >
            {""}
            Lets begin this journey without any further delay!
          </h2>
          <p
            data-aos="fade-up"
            className="px-2 font-normal text-xl text-gray-300"
          >
            We guarantee satisfaction. If unhappy with first lesson, receive
            another tutor with same lesson, no questions asked.
          </p>
          <div data-aos="fade-up" className="flex justify-center items-center">
            <Link href="/Booking">
              <button className=" font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:-mt-12">
        <Contact />
      </div>
    </div>
  );
};

export default Index;


