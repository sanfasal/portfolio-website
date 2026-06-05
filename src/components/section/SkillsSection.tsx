import { skillsData } from "../../constants/data";

export default function SkillsSection() {
  return (
    <section className="py-24 text-white" id="skill">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <span
          className="text-sm font-medium text-indigo-400 tracking-widest uppercase"
          data-aos="zoom-in-up"
        >
          My Expertise
        </span>
        <h1
          className="text-3xl md:text-5xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          Skills & Technologies
        </h1>
        <p
          className="text-sm md:text-base text-gray-500 text-center max-w-xl leading-relaxed"
          data-aos="zoom-in-up"
        >
          Creating modern, scalable, and responsive web applications with
          frontend and backend technologies.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] duration-500"
            data-aos="zoom-in-up"
            data-aos-delay={index * 60}
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 duration-500" />

            {/* Percent watermark */}
            <h1 className="text-6xl font-black text-white/10 absolute top-6 right-6">
              {skill.percent}
            </h1>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">{skill.name}</h2>

              {/* Progress bar */}
              <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-[6px] rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.percent}%` }}
                />
              </div>

              {/* Bottom */}
              <div className="mt-6 flex justify-between text-sm text-gray-400">
                <span>Performance</span>
                <span>{skill.percent}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
