// components/SkillCard.tsx
import React from "react";

interface SkillCardProps {
  name: string;
  percent: number;
  icon: React.ReactNode;
}

export default function SkillCard({
  name,
  percent,
  icon,
}: SkillCardProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90">
          {/* Background */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#2a2a2a"
            strokeWidth="8"
            fill="none"
          />

          {/* Progress */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#ff7a00"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <h3 className="text-orange-500 text-2xl font-bold mt-4">
        {percent}%
      </h3>

      <p className="text-gray-400">{name}</p>
    </div>
  );
}