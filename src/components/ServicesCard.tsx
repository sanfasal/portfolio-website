import React from "react";

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export default function ServicesCard({
  title,
  description,
  icon,
  index,
}: ServicesCardProps) {
  return (
    <div
      className="group relative flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-indigo-500/60 hover:bg-white/[0.07] transition duration-300 overflow-clip"
      data-aos="zoom-in-up"
      data-aos-delay={index * 80}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 text-2xl group-hover:bg-indigo-500/20 transition duration-300">
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full group-hover:w-full transition-all duration-500" />
    </div>
  );
}
