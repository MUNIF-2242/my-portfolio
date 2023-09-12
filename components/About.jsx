import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 px-8"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Currently, I am actively engaged in mastering React Native,
            utilizing its potential to create cross-platform mobile applications
            and delivering exceptional user experiences. I specialize in
            creating responsive front-end UI applications that seamlessly
            integrate with APIs and various backend technologies.I firmly adhere
            to the belief that true development prowess lies in choosing the
            optimal tool for each unique task.
          </p>
          <p className="py-2 text-gray-600">
            In addition to my work with React Native, I have valuable experience
            with Caspio.Caspio has allowed me to develop robust web applications
            and databases with ease, streamlining data management and enhancing
            user interactions. My proficiency in React, React Native and Caspio
            underscores my versatility and commitment to staying at the
            forefront of technological innovation.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
