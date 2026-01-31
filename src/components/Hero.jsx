import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CRM_business from "../assets/CRM_business.jpeg";
import { useNavigate } from "react-router-dom";


export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="bg-[#111827] px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Smart CRM Software for <span className="text-[#D946EF]">Growing Businesses</span>
          </h2>

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            Organize customer data, streamline sales operations, and build
            long-lasting customer relationships all in one place.
          </p>


          <motion.button
            onClick={() => navigate("/signup")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D946EF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C026D3] transition-all flex items-center gap-2 mx-auto md:mx-0 shadow-lg hover:shadow-xl"
          >
            Start Free Trial <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-[#D946EF] blur-2xl opacity-20 rounded-full"></div>
          <img
            src={CRM_business}
            alt="CRM Dashboard"
            className="relative rounded-xl shadow-2xl border border-white/10 w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}