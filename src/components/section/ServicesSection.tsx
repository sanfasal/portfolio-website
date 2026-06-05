import { servicesData } from "../../constants/data";
import ServicesCard from "../ServicesCard";

export default function ServicesSection() {
  return (
    <section className="py-24 text-white" id="services">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <span
          className="text-sm font-medium text-indigo-400 tracking-widest uppercase"
          data-aos="zoom-in-up"
        >
          What I Offer
        </span>
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          My Services
        </h1>
        <p
          className="text-sm md:text-base text-gray-500 text-center max-w-xl leading-relaxed"
          data-aos="zoom-in-up"
        >
          I provide modern web development solutions — creating responsive,
          fast, and user-friendly applications that help businesses grow online.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
