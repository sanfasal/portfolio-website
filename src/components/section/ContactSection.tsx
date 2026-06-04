"use client";

import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

const contactInfo = [
  {
    icon: MdEmail,
    label: "Email",
    value: "thanchanna2026@gmail.com",
  },
  {
    icon: MdPhone,
    label: "Phone",
    value: "+855 12 345 678",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Phnom Penh, Cambodia",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="py-24 text-white" id="contact">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <span
          className="text-sm font-medium text-indigo-400 tracking-widest uppercase"
          data-aos="zoom-in-up"
        >
          Get In Touch
        </span>
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          Contact Me
        </h1>
        <p
          className="text-sm md:text-base text-gray-500 text-center max-w-xl leading-relaxed"
          data-aos="zoom-in-up"
        >
          Have a project in mind or just want to say hello? Feel free to reach
          out — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left — Contact Info */}
        <div
          className="flex flex-col gap-5 lg:w-[340px] shrink-0"
          data-aos="fade-right"
        >
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
            >
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                <p className="text-sm text-gray-200 break-all">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — Form */}
        <form
          className="flex-1 flex flex-col gap-4"
          data-aos="fade-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition"
            />
            <input
              type="text"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              placeholder="Project Timeline"
              className="w-full h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell me about your project..."
            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition resize-none"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-full transition duration-300 hover:scale-105 shadow-lg shadow-indigo-500/30"
            >
              <FaPaperPlane size={13} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
