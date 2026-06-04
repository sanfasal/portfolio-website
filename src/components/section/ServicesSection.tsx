import { servicesData } from "../../constants/data";

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
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-indigo-500/60 hover:bg-white/[0.07] transition duration-300 overflow-clip"
            data-aos="zoom-in-up"
            data-aos-delay={index * 80}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 text-2xl group-hover:bg-indigo-500/20 transition duration-300">
              {service.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
