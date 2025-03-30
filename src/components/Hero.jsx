import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 min-h-screen ">
      <div className="z-20 bg-gray-800 backdrop-blur-sm p-4 rounded-xl">
        <div className="flex justify-center gap-6 mb-12">
          <button className="px-8 py-3 rounded-full bg-gray-900/80 border-2 border-orange-500 text-orange-400 font-medium shadow-[0_0_10px_rgba(255,107,53,0.5)] transition-all hover:shadow-[0_0_15px_rgba(255,107,53,0.8)] hover:text-orange-300">
            Code
          </button>
          <button className="px-8 py-3 rounded-full bg-gray-900/80 border-2 border-green-500 text-green-400 font-medium shadow-[0_0_10px_rgba(74,222,128,0.5)] transition-all hover:shadow-[0_0_15px_rgba(74,222,128,0.8)] hover:text-green-300">
            Create
          </button>
          <button className="px-8 py-3 rounded-full bg-gray-900/80 border-2 border-purple-500 text-purple-400 font-medium shadow-[0_0_10px_rgba(167,139,250,0.5)] transition-all hover:shadow-[0_0_15px_rgba(167,139,250,0.8)] hover:text-purple-300">
            Connect
          </button>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white text-center drop-shadow-md">
          A Coding Community for
          <div className=" mt-2">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg shadow-[0_0_10px_rgba(139,92,246,0.5)]">
              Developers
            </div>
          </div>
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-300 leading-relaxed text-center">
          Bit-to-Byte is an inclusive community for anyone passionate about
          technology. We empower coders through hand-on-mentorship & guidance.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://chat.whatsapp.com/FqKO8sNUKsPB8IUfe6lIb2"
            target="_blank"
            rel="noopener noreferrer"
            className="relative my-2 px-6 py-3 flex items-center space-x-2 bg-green-500 text-white sm:text-lg font-semibold 
        rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            <div className="absolute -inset-2 rounded-full bg-green-500 opacity-75 blur-xl animate-pulse -z-10"></div>
            <FaWhatsapp className="text-2xl" />
            <span>Join The Official WhatsApp Group</span>
          </a>
        </div>
      </div>
    </section>
  );
}
