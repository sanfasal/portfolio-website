"use client";
import React from "react";
import Image from "next/image";
import { socialLinksData } from "@/static-data/data";
import Link from "next/link";
import "aos/dist/aos.css";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row  items-start justify-between text-white mt-12"
      id="home"
    >
      {/* left side */}
      <div  className="flex flex-col gap-4 w-full items-center md:items-start" data-aos="fade-right">
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <p className="text-gray-400 text-md md:text-xl font-medium">Hi I am</p>
          <h1 className="text-lg  font-bold text-white">Than Channa</h1>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mt-2">
          Frontend Developer
        </h2>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">
          {socialLinksData.map(({ id, icon: Icon, href, label }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-indigo-500 hover:border-indigo-500 transition duration-300 hover:-translate-y-2"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <button className="px-6 py-2 text-white rounded-full border border-gray-200 hover:bg-indigo-500   duration-300 hover:scale-105">
            Download CV
          </button>
        </div>

        <div className="bg-[#111] rounded-2xl px-4 sm:px-10 py-6 sm:py-8 mt-8 w-full max-w-xl">
          <div className="flex items-center justify-between text-white gap-2 sm:gap-4">
            {/* Item */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold text-primary">
                5+
              </h1>
              <p className="text-gray-300 text-xs sm:text-sm md:text-xl mt-2">
                Experiences
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-16 sm:h-20 bg-gray-600"></div>

            {/* Item */}
            <div className="flex-1 text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-primary">
                20+
              </h1>
              <p className="text-gray-300 text-xs sm:text-sm md:text-xl mt-2">
                Project done
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-16 sm:h-20 bg-gray-600"></div>

            {/* Item */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-2xl md:text-4xl font-bold text-primary">
                80+
              </h1>
              <p className="text-gray-300 text-xs sm:text-sm md:text-xl mt-2">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 mt-8 md:mt-0" data-aos="fade-left">
        <Image
          src="/images/channa.png"
          alt="Profile Image"
          width={600}
          height={600}
          className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px] h-auto object-contain"
          unoptimized
        />
      </div>
    </section>
  );
}
