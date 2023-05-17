import React,{useEffect} from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 1700,
        easing: "ease-in-out-back",
        delay: 100,
        once:true
      });
    }, []);
  return (
    <div>
      <div className="relative max-w-screen-xl m-auto w-full h-fit  flex flex-col md:flex-row px-10 items-center  ">
        <div className="absolute mix-blend-multiply w-11/12 h-96 sm:left-10 top-28 bg-gradient-to-r from-blue-300 via-purple-300  to-yellow-200 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
          {" "}
        </div>
        <div>
          <h1 className="text-5xl text-gray-700 font-bold">
            Our goal is to keep the Punjabi language and culture alive around
            the world.
          </h1>
        </div>
        <div>
          <Image
            src="/homePage/target.png"
            className="w-[1200px] h-[500px]"
            width={1000}
            height={1000}
            alt="hero-section"
          ></Image>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="md:m-10 m-6  rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] relative   ">
          <div className="flex  items-center justify-center">
            <h1 data-aos="fade-up" className="text-gray-700 relative mx-3 mt-8 text-center text-5xl font-bold">
              Why Punjabi School
            </h1>
            <div className="bg-sky-400 mt-8 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
          </div>
          <div className="absolute mix-blend-multiply w-11/12 h-5/6 left-10 top-28 bg-gradient-to-r from-blue-200 via-purple-200  to-yellow-100 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
            {" "}
          </div>
          <div  className="flex text-lg xl:text-xl flex-col gap-4 items-center justify-center">
            <p data-aos="fade-up" className=" px-4  sm:px-10 pt-5">
              The migration of Punjabi people to Western countries is a trend
              that has been ongoing for many years. Each year, hundreds of
              thousands of Punjabis migrate to countries like the US, Canada,
              the UK, and Australia, among others. While this migration offers
              new opportunities and experiences, it can also create a disconnect
              from their roots and culture. Many Punjabi migrants and their
              children often struggle to maintain a connection to their culture,
              particularly in terms of language and religious traditions. They
              lack a community where they can learn about and engage with
              Punjabi culture, and as a result, they may struggle to communicate
              with family members who still reside in Punjab.
            </p>
            <p data-aos="fade-up" className=" px-4  sm:px-10 ">
              The Punjabi School was created to provide a platform for Punjabi
              migrants and their children to learn about their culture and
              language. The school offers classes on Punjabi language and
              culture, as well as religious teachings, including Gurbani and
              Sikhism. Through its efforts, the Punjabi School aims to ensure
              that the rich cultural heritage of Punjab is not lost among its
              diaspora. The school also helps parents who live abroad and are
              looking for an organization that can teach their children about
              Punjabi culture and Sikhism.
            </p>
            <p data-aos="fade-up" className=" px-4 pb-6  sm:pb-10  sm:px-10 ">
              In addition to serving the Punjabi community, the Punjabi School
              welcomes anyone who is interested in learning about Punjabi
              culture and Sikhism. Regardless of their background or level of
              familiarity with the culture, the school is open to everyone who
              wants to learn and connect with the community. Through its
              efforts, the Punjabi School aims to keep the Punjabi culture and
              language alive and thriving, while also creating a sense of
              community among those who share these traditions.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="md:mx-10 mx-6 my-16 rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] relative   ">
          <div className="flex  items-center justify-center">
            <h1 data-aos="fade-up" className=" text-gray-700 relative mx-3 mt-8 text-center text-5xl font-bold">
              Our Team
            </h1>
            <div className="bg-sky-400 mt-8 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
          </div>
          <div className="absolute mix-blend-multiply w-11/12 h-5/6 left-10 top-28 bg-gradient-to-r from-blue-200 via-purple-200  to-yellow-100 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
            {" "}
          </div>
          <div className="text-lg xl:text-xl flex flex-col gap-4 items-center justify-center">
          <p data-aos="fade-up" className=" px-4  sm:px-10 pt-5">
            At Punjabi School, we are proud to have a team of dedicated
            professionals who are committed to providing high-quality Punjabi
            language and spiritual classes online. Our team is composed of
            experienced educators and spiritual leaders who bring a wealth of
            knowledge and expertise to our online classes. Our language
            instructors are experienced educators who hold advanced degrees in
            Punjabi language and literature. They have worked with students of
            all ages and backgrounds, and are committed to creating engaging and
            effective lesson plans that help our students learn and grow. Our
            spiritual advisors are highly respected leaders in the Punjabi
            community who have years of experience in teaching spirituality and
            meditation practices to people of all faiths. They are passionate
            about helping our students develop a deeper sense of connection and
            inner peace, and are committed to creating a supportive and
            inclusive learning environment.
          </p>
          <p data-aos="fade-up" className=" px-4 pb-6  sm:pb-10  sm:px-10">
            Our team takes a personalized approach to teaching, recognizing that
            each student has their own unique learning style and needs. We use a
            variety of interactive and engaging learning activities, including
            games, videos, and group discussions, to keep our classes fun and
            engaging. We also prioritize creating a supportive and inclusive
            learning environment, where all students feel welcomed and valued.
            Thank you for considering Punjabi School for your language and
            spiritual education needs. We look forward to working with you!
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
