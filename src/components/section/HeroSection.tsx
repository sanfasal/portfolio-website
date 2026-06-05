"use client";
import React from "react";
import Image from "next/image";
import { socialLinksData } from "../../constants/data";
import Link from "next/link";
import Button from "../Button";
import { FaDownload } from "react-icons/fa";
import "aos/dist/aos.css";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-10 md:py-16 text-white">
      {/* Left side */}
      <div className="flex flex-col gap-5 md:gap-6 w-full md:w-1/2 items-center md:items-start">
        {/* Name & Title */}
        <div
          className="flex flex-col gap-2 text-center md:text-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <p className="text-gray-400 text-base md:text-lg">Hi, I am</p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Than Channa
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Frontend Developer
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-gray-400 text-sm md:text-base lg:text-lg max-w-md text-center md:text-left leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          I build modern, responsive, and performant web applications with clean
          design and scalable code.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-3 justify-center md:justify-start"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="#contact">
            <Button title="Hire Me" />
          </a>
          <Button
            title="Download CV"
            variant="outline"
            icon={<FaDownload size={14} />}
          />
        </div>

        {/* Social Icons */}
        <div
          className="flex gap-3 justify-center md:justify-start"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {socialLinksData.map(({ id, icon: Icon, href, label }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500 hover:bg-indigo-500/10 transition duration-300 hover:-translate-y-1"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div
          className="flex w-full max-w-xs sm:max-w-sm md:max-w-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden divide-x divide-white/10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            { value: "5+", label: "Years Exp." },
            { value: "20+", label: "Projects" },
            { value: "80+", label: "Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex-1 px-3 py-4 md:px-4 md:py-5 text-center"
            >
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-gray-400 text-xs mt-1 whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div
        className="shrink-0 flex items-center justify-center w-full md:w-1/2"
        data-aos="fade-left"
      >
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/channa.png"
            alt="Profile Image"
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
