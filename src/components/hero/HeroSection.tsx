import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AV from "../../assets/avcompressed.png";
import cv from "../../assets/AlbertinoVieira.pdf";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="home" aria-label="Hero section">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left"
        >
          <p className="text-primary-400 font-semibold tracking-wide mb-4">
            Lead Full Stack Developer
          </p>
          <h1 className="text-white w-full mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m Albertino Vieira
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Building scalable web platforms",
                1200,
                "Delivering mobile experiences",
                1200,
                "Leading high-performance teams",
                1200,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-8 text-base sm:text-lg lg:text-xl max-w-2xl">
            Full Stack Developer with 7+ years of experience delivering React, Node.js,
            and mobile applications for global companies. I focus on performance,
            product quality, and clean architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white font-semibold text-center"
            >
              Hire Me
            </a>
            <a
              href={cv}
              className="px-6 py-3 rounded-full border border-slate-600 hover:border-primary-400 text-white text-center"
              download
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[360px] lg:h-[360px] mx-auto bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-full border border-slate-700 shadow-2xl">
            <img
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              alt="Portrait of Albertino Vieira"
              src={AV}
              width={280}
              height={280}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
