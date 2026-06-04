import Card from "@/components/Card";
import { servicesData } from "@/static-data/data";

export default function ServicesSection() {
  return (
    <section className="flex flex-col gap-12 mt-25" id="services">
      <div className="flex flex-col items-center gap-4">
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          My Services
        </h1>
        <p
          className="text-md md:text-lg text-gray-500 text-center max-w-2xl"
          data-aos="zoom-in-up"
        >
          I provide modern web development solutions, creating responsive, fast,
          and user-friendly applications that help businesses grow online.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} data-aos="zoom-in-up">
            <Card
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
