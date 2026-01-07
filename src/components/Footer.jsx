import { Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#043873] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Crivient</h1>
          <p className="text-gray-300 leading-relaxed text-sm">
            Empowering teams to build better relationships and close more deals.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Product</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <Link to="/overview" className="hover:text-[#4F9CF9] cursor-pointer">Overview</Link>
            </li>

            <li>
              <Link className="hover:text-[#4F9CF9] cursor-pointer" to="/pricing">Pricing</Link>
            </li>

            <li>
              <Link to="/customer-stories" className="hover:text-[#4F9CF9] cursor-pointer">Customer Stories</Link>
            </li>

          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <Link to="/help-center" className="hover:text-[#4F9CF9] cursor-pointer">Help Center</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <Link to="/about" className="hover:text-[#4F9CF9] cursor-pointer">About</Link>
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
          <Facebook className="hover:text-[#4F9CF9] cursor-pointer transition-colors" size={20} />
          <FaXTwitter className="hover:text-[#4F9CF9] cursor-pointer transition-colors" size={20} />
          <Linkedin className="hover:text-[#4F9CF9] cursor-pointer transition-colors" size={20} />
        </div>
      </div>
    </footer>
  );
}