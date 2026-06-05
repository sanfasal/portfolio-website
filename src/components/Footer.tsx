import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { socialLinksData } from "../constants/data";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="px-6 md:px-20 py-10" data-aos="fade-up">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            My Portfolio
          </h1>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-8">
          {socialLinksData.map(({ id, icon: Icon, href, label }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500 transition duration-300 hover:-translate-y-1"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <MdEmail size={18} className="text-indigo-400" />
            <span>thanchanna2026@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone size={18} className="text-indigo-400" />
            <span>+855 12 345 678</span>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-gray-500">
          &copy; 2026 Than Channa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
