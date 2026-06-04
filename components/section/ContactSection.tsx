export default function ContactSection() {
  return (
    <section className="py-24  text-white" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            data-aos="zoom-in-up"
          >
            Contact me
          </h2>

          <p className="text-gray-500 text-md md:text-lg" data-aos="zoom-in-up">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        {/* Form */}
        <form className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6" data-aos="fade-right">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 px-5 rounded-xl bg-zinc-900 border border-transparent focus:border-blue-500 focus:outline-none transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-12 px-5 rounded-xl bg-zinc-900 border border-transparent focus:border-blue-500 focus:outline-none transition"
            />

            <input
              type="text"
              placeholder="Timeline"
              className="w-full h-12 px-5 rounded-xl bg-zinc-900 border border-transparent focus:border-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6" data-aos="fade-left">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-5 rounded-xl bg-zinc-900 border border-transparent focus:border-blue-500 focus:outline-none transition"
            />

            <textarea
              rows={6}
              placeholder="Project Details..."
              className="w-full px-5 py-4 rounded-xl bg-zinc-900 border border-transparent focus:border-blue-500 focus:outline-none transition resize-none"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end">
            <button className="px-6 py-2 text-white rounded-full border border-gray-200 hover:bg-indigo-500 duration-300 hover:scale-105">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
