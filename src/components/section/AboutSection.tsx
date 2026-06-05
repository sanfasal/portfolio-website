import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import Button from "../Button";
import { highlightsData } from "@/src/constants/data";

export default function AboutSection() {
  return (
    <section className="py-24 text-white" id="about">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <span
          className="text-sm font-medium text-indigo-400 tracking-widest uppercase"
          data-aos="zoom-in-up"
        >
          Get To Know Me
        </span>
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          About Me
        </h1>
        <p
          className="text-sm md:text-base text-gray-500 text-center max-w-xl leading-relaxed"
          data-aos="zoom-in-up"
        >
          Building modern web applications with clean design and scalable
          solutions.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left — Image */}
        <div
          className="shrink-0 flex items-center justify-center w-full md:w-auto"
          data-aos="fade-right"
        >
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 overflow-hidden">
            <Image
              src="/images/about-me.png"
              alt="About me"
              width={400}
              height={480}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Right — Text */}
        <div className="flex flex-col gap-6 flex-1" data-aos="fade-left">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I am a passionate Full-Stack Developer with experience in building
            modern, responsive, and scalable web applications. I specialize in
            technologies such as React, Next.js, FastAPI, ASP.NET Core, MongoDB,
            and PostgreSQL.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            My goal is to create applications that provide excellent user
            experiences while maintaining high performance and security. I am
            constantly learning new technologies to stay up-to-date with the
            latest trends in software development.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {highlightsData.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mt-0.5 shrink-0">
                  {label}
                </span>
                <span className="text-gray-300 text-sm break-all">{value}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-2">
            <Link href="#">
              <Button title="Download CV" icon={<FaDownload size={14} />} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
