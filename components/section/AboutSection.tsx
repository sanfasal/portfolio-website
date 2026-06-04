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
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          About Me
        </h1>
        <p
          className="text-md md:text-lg text-gray-500 text-center max-w-2xl"
          data-aos="zoom-in-up"
        >
          Building Modern Web Applications with Clean Design and Scalable
          Solutions
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap7 md:flex-row items-start justify-between">
        {/* left side */}
        <div className="flex-1" data-aos="fade-right">
          <Image
            src="/images/about-me.png"
            alt="about image"
            width={500}
            height={500}
          />
        </div>
        {/* right side */}
        <div className="flex-2" data-aos="fade-left">
          <p className="text-md md:text-lg text-gray-300 ">
            I am a passionate Full-Stack Developer with experience in building
            modern, responsive, and scalable web applications. I specialize in
            technologies such as React, Next.js, FastAPI, ASP.NET Core, MongoDB,
            and PostgreSQL. I enjoy transforming ideas into real-world solutions
            through clean code, intuitive user interfaces, and efficient backend
            systems.
          </p>
          <br />
          <p className="text-md md:text-lg text-gray-300">
            My goal is to create applications that provide excellent user
            experiences while maintaining high performance and security. I am
            constantly learning new technologies and improving my skills to stay
            up-to-date with the latest trends in software development.
          </p>

          <div className="mt-6">
            <Button title="Download CV" />
          </div>
        </div>
      </div>
    </section>
  );
}
