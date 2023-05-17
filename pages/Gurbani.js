import React,{useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
const Gurbani = () => {
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
      <div className="relative max-w-screen-xl m-auto   w-full h-fit  flex flex-col md:flex-row px-10 items-center  ">
        <div className="absolute mix-blend-multiply w-11/12 h-96 sm:left-10 top-28 bg-gradient-to-r from-blue-300 via-purple-300  to-yellow-200 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
          {" "}
        </div>
        <div>        
          <h1 className="text-5xl text-gray-700 font-bold">
            Get{" "}
            <span className="text-sky-600">
              Translation, Explanation and class of gurbani{" "}
            </span>
            into
            <span className="text-pink-400"> English and Punjabi </span>
            with <span className="text-cyan-500">Punjabi School.</span>
          </h1>
          <h1 data-aos="fade-up" className="text-xl mt-8">
            We are a team of Gursikh teachers who have a strong commitment to
            Sikhism and aim to spread its influence. Book a class according to
            your availability to dive into Sikhism.
          </h1>
        </div>
        <div>
          <Image
            src="/khanda.svg"
            className="w-[2000px] h-[500px]"
            width={1000}
            height={1000}
            alt="hero-section"
          ></Image>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="md:m-10 m-6  rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] relative   ">
          <div className="flex  items-center justify-center">
            <h1 data-aos="fade-up" className="text-gray-700 relative mt-8 mb-4 text-center text-5xl font-bold">
              Our aim
            </h1>
            <div className="bg-sky-400 mt-8 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
          </div>
          <div className="absolute mix-blend-multiply w-11/12 h-44 left-10 top-28 bg-gradient-to-r from-blue-300 via-purple-300  to-yellow-200 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
            {" "}
          </div>
          <div  className="text-lg xl:text-xl flex flex-col gap-4 items-center justify-center">
            <p data-aos="fade-up" className=" px-4  sm:px-10 ">
              In today&apos;s modern world, many people are not as familiar with
              Sikhism as they might like to be. While there are many resources
              available for learning about this powerful and meaningful
              spiritual tradition, it can be difficult to know where to start or
              how to deepen one&apos;s understanding. At the heart of our mission is
              a desire to share the power and beauty of Sikhism with a wider
              audience. We know that many people feel disconnected from their
              spiritual traditions or are simply seeking a deeper understanding
              of the world around them. By offering classes that are engaging,
              informative, and grounded in the teachings of the Sikh Gurus, we
              hope to provide a space where people can explore their spiritual
              paths with confidence and curiosity. 
            </p>
            <p data-aos="fade-up" className=" px-4 pb-6  sm:pb-10  sm:px-10 ">our goal is to make Sikhism
              more accessible and relevant to people of all backgrounds,
              especially abroad-born Punjabi children, and to help them recognize the
              transformative power of these teachings in their own lives. We
              hope to inspire a new generation of Sikhs who are dedicated to
              living a life of spiritual devotion, service, and compassion,
              thereby creating a more peaceful and harmonious world.</p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto ">
        <div className="flex items-center justify-center">
          <h1 data-aos="fade-up" className="text-gray-700 text-center mx-4 relative mt-12 text-5xl font-bold">
            Gurbani we cover
          </h1>
          <div className="bg-sky-400 mt-12 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className=" text-lg xl:text-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-14 p-6 md:p-10">
          <div data-aos="fade-up"
            className=" flex flex-col items-center  w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/khanda.svg"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h1 className="text-center text-3xl font-medium">Japji Sahib</h1>
            <p className="mt-3">
              Japji Sahib is a spiritual composition and one of the most
              important and revered hymns in Sikhism. It was written by Guru
              Nanak, the founder of the Sikh religion, and is considered a key
              part of daily Sikh prayer and meditation. The hymn explores the
              nature of the divine and the path to spiritual liberation.
            </p>
            <Link href="/Booking">
              <button className="mt-3 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
          <div data-aos="fade-up"
            className=" flex flex-col items-center  w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
             <Image
              className="m-auto"
              src="/khanda.svg"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h1 className="text-center text-3xl font-medium">Chaupai Sahib</h1>
            <p className="mt-3">
              Chaupai Sahib is a hymn in Sikhism composed by Guru Gobind Singh,
              the tenth Sikh Guru. It is a prayer that is recited daily by Sikhs
              and is part of the Nitnem, a collection of daily Sikh prayers. The
              hymn is meant to provide protection and strength to the devotee
              and to remind them of the power and mercy of the divine.
            </p>
            <Link href="/Booking">
              <button className="mt-3 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
          <div data-aos="fade-up"
            className=" flex flex-col items-center w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
             <Image
              className="m-auto"
              src="/khanda.svg"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h1 className="text-center text-3xl font-medium">Rehraas Sahib</h1>
            <p className="mt-3">
              Rehraas Sahib is a prayer in Sikhism that is recited at the end of
              the day to thank and praise the divine for the day&apos;s blessings. It
              is part of the Nitnem, a collection of daily Sikh prayers, and is
              meant to provide a sense of peace and gratitude to the devotee.
              The prayer also encourages Sikhs to live a life of spiritual
              discipline and righteousness.
            </p>
            <Link href="/Booking">
              <button className="mt-3 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
          <div data-aos="fade-up"
            className=" flex flex-col items-center w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/khanda.svg"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h1 className="text-center text-3xl font-medium">Anand Sahib</h1>
            <p className="mt-3">
              Anand Sahib is a devotional hymn in Sikhism composed by Guru Amar
              Das, the third Sikh Guru. It is a celebration of the blissful
              state of union with the divine and is recited during Sikh
              ceremonies and celebrations, particularly at weddings. The hymn
              encourages Sikhs to live a life of spiritual devotion and service
              to others.
            </p>
            <Link href="/Booking">
              <button className="mt-3 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
          <div data-aos="fade-up"
            className=" flex flex-col items-center w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/khanda.svg"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h1 className="text-center text-3xl font-medium">Kirtan Sohila</h1>
            <p className="mt-3">
              Kirtan Sohila is a Sikh prayer that is recited at bedtime to give
              thanks and seek protection from the divine during the night. It is
              part of the Nitnem, a collection of daily Sikh prayers, and is
              meant to provide a sense of peace and comfort to the devotee
              before sleeping. The prayer also emphasizes the importance of
              spiritual devotion and meditation.
            </p>
            <Link href="/Booking">
              <button className="mt-3 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
          <div data-aos="fade-up"
            className=" flex flex-col items-center  max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/khanda.svg"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h1 className="text-center text-3xl font-medium">Jaap Sahib</h1>
            <p className="mt-3">
              Jaap Sahib is a hymn in Sikhism composed by Guru Gobind Singh, the
              tenth Sikh Guru. It is a prayer that is recited daily by Sikhs and
              is part of the morning Nitnem, a collection of daily Sikh prayers.
              The hymn praises the divine and emphasizes the importance of
              spiritual discipline and meditation in achieving a state of
              blissful union with the divine.
            </p>
            <Link href="/Booking">
              <button className="mt-3 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
          <div data-aos="fade-up"
            className=" flex flex-col items-center mb-8  max-w-fit h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
             <Image
              className="m-auto"
              src="/khanda.svg"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h1 className="text-center text-3xl font-medium">Sukhmani Sahib</h1>
            <p className="mt-3">
              Sukhmani Sahib is a devotional hymn in Sikhism composed by Guru
              Arjan, the fifth Sikh Guru. It is a prayer that is recited to
              bring peace and comfort to the devotee and to seek the divines&apos;s
              guidance and protection. The hymn emphasizes the importance of
              spiritual devotion and meditation in achieving a state of inner
              peace and happiness.
            </p>
            <Link href="/Booking">
              <button className="mt-3 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gurbani;
