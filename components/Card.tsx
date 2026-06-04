import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className="bg-zinc-900 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300     border border-transparent
    hover:border-indigo-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
    >
      <div className="flex justify-center text-primary text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-primary mb-4">{title}</h3>

      <p className="text-gray-400 leading-8 text-md md:text-lg">
        {description}
      </p>
    </div>
  );
}
