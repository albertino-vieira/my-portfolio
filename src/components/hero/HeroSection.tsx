import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AV from "../../assets/avcompressed.png";
import cv from "../../assets/AlbertinoVieira.pdf";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="home" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-8 text-center sm:text-left"
        >
          <p className="text-primary-300 font-semibold tracking-wide uppercase mb-3">
            Lead Full Stack Developer
          </p>

          <h1
            id="hero-title"
            className="text-white w-full mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br />
            Albertino Vieira
          </h1>

          <div className="text-[#ADB7BE] mb-6 text-lg lg:text-xl min-h-[36px]">
            <TypeAnimation
              sequence={[
                "Building scalable web and mobile products",
                1400,
                "7+ years delivering high-performance solutions",
                1400,
                "React, Node.js, React Native & Azure specialist",
                1400,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </div>

          <p className="text-[#ADB7BE] mb-8 max-w-2xl mx-auto sm:mx-0">
            Full Stack Developer focused on performance, product quality, and
            technical leadership. I help teams deliver modern, reliable
            applications from MVP to enterprise-scale platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white text-center font-semibold"
            >
              Hire Me
            </a>
            <a
              href={cv}
              className="px-6 py-3 w-full sm:w-fit rounded-full border border-slate-600 hover:border-primary-400 text-white text-center font-semibold"
              download
            >
              Download CV
            </a>
          </div>

          <ul className="grid grid-cols-3 gap-4 mt-10 text-left">
            <li className="bg-[#1A1A1A] rounded-xl p-4 border border-slate-800">
              <p className="text-2xl font-bold text-white">7+</p>
              <p className="text-sm text-slate-400">Years Experience</p>
            </li>
            <li className="bg-[#1A1A1A] rounded-xl p-4 border border-slate-800">
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-sm text-slate-400">Projects Delivered</p>
            </li>
            <li className="bg-[#1A1A1A] rounded-xl p-4 border border-slate-800">
              <p className="text-2xl font-bold text-white">2</p>
              <p className="text-sm text-slate-400">
                University Courses Taught
              </p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:col-span-4 flex justify-center sm:justify-end"
        >
          <div className="relative mx-auto sm:mx-0 w-[260px] h-[260px] lg:w-[360px] lg:h-[360px] bg-gradient-to-br from-primary-900/40 to-secondary-900/40 rounded-full border border-slate-800 shadow-2xl shadow-primary-900/20">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[85%] h-[85%] object-cover"
              alt="Albertino Vieira portrait"
              src={AV}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;