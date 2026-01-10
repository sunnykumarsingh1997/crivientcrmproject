import { Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">

        <div className="space-y-6">
          <Link to="/" className="text-3xl font-bold">Crivient</Link>
          {/* <h1 className="text-3xl font-bold">Crivient</h1> */}
          <p className="text-gray-300 leading-relaxed text-sm mt-4">
            Empowering teams to build better relationships and close more deals.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Product</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <Link to="/products" className="hover:text-[#D946EF] cursor-pointer">Products</Link>
            </li>
            <li>
              <Link to="/overview" className="hover:text-[#D946EF] cursor-pointer">Overview</Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-[#D946EF] cursor-pointer">Pricing</Link>
            </li>
            <li>
              <Link to="/customer-stories" className="hover:text-[#D946EF] cursor-pointer">Customer stories</Link>
            </li>

          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <Link to="/help-center" className="hover:text-[#D946EF] cursor-pointer">Help Center</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <Link to="/about" className="hover:text-[#D946EF] cursor-pointer">About</Link>
            </li>
          </ul>
        </div>



      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-sm text-gray-300">
          <Link to="/terms-services">Terms & Services</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <p className="text-sm text-gray-400">© 2026 Crivient LLC.</p>

        <div className="flex gap-6">
          <Facebook className="hover:text-[#D946EF] cursor-pointer transition-colors" size={20} />
          <FaXTwitter className="hover:text-[#D946EF] cursor-pointer transition-colors" size={20} />
          <Linkedin className="hover:text-[#D946EF] cursor-pointer transition-colors" size={20} />
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <span className="block text-gray-400">Email</span>
              <a
                href="mailto:support@crivient.com"
                className="hover:text-[#D946EF]"
              >
                support@crivient.com
              </a>
            </li>
            <li>
              <span className="block text-gray-400">Phone</span>
              <a
                className="hover:text-[#D946EF]"
              >
                +91 9251011591
              </a>
            </li>
            <li>
              <span className="block text-gray-400">ADDRESS</span>
              <a
                className="hover:text-[#D946EF]"
              >
              476/42 DHAN NADI VIJAY SINGH PATHIK NAGAR AJMER RAJASTHAN 305001
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}