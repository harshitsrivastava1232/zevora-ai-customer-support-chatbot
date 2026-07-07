import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-white">Zevora</h2>

            <p className="mt-5 leading-7 text-gray-400">
              AI-powered food ordering platform helping users discover
              restaurants with intelligent recommendations and a seamless
              ordering experience.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-xl font-semibold text-white">Company</h3>

            <ul className="mt-6 space-y-3">
              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                Home
              </li>

              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                Restaurants
              </li>

              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                Categories
              </li>

              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                About
              </li>

              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                Contact
              </li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h3 className="text-xl font-semibold text-white">Support</h3>

            <ul className="mt-6 space-y-3">
              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                Help Center
              </li>

              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                FAQs
              </li>

              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                Privacy Policy
              </li>

              <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-orange-400">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
                <Phone size={18} className="text-orange-500" />
                <span>+91 7983353364</span>
              </div>

              <div className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
                <Mail size={18} className="text-orange-500" />
                <span>support@zevora.com</span>
              </div>

              <div className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
                <MapPin size={18} className="text-orange-500" />
                <span>Greater Noida, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2026 Zevora. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
