import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-10 p-10 pb-0 mt-25"
      id="about"
    >
      <div className="flex flex-col items-center gap-4">
        <h2
          className="text-3xl md:text-5xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          About Me
        </h2>
        <p
          className="text-base md:text-lg text-gray-500 text-center max-w-2xl"
          data-aos="zoom-in-up"
        >
          Building Modern Web Applications with Clean Design and Scalable
          Solutions
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-12 md:flex-row items-center md:items-start justify-between w-full">
        {/* left side */}
        <div className="w-full md:w-auto flex justify-center md:justify-start flex-1" data-aos="fade-right">
          <Image
            src="/images/about-me.png"
            alt="about image"
            width={500}
            height={500}
            className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain"
          />
        </div>
        {/* right side */}
        <div className="flex-2 w-full text-center md:text-left" data-aos="fade-left">
          <p className="text-base md:text-lg text-gray-300 ">
            I am a passionate Full-Stack Developer with experience in building
            modern, responsive, and scalable web applications. I specialize in
            technologies such as React, Next.js, FastAPI, ASP.NET Core, MongoDB,
            and PostgreSQL. I enjoy transforming ideas into real-world solutions
            through clean code, intuitive user interfaces, and efficient backend
            systems.
          </p>
          <br />
          <p className="text-base md:text-lg text-gray-300">
            My goal is to create applications that provide excellent user
            experiences while maintaining high performance and security. I am
            constantly learning new technologies and improving my skills to stay
            up-to-date with the latest trends in software development.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <Button title="Download CV" />
          </div>
        </div>
      </div>
    </section>
  );
}
