import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111827] text-white px-6 md:px-10 py-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tight">Crivient</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          <li className="hover:text-[#D946EF] cursor-pointer transition-colors"><Link to="/Products">Products</Link></li>
          <li className="hover:text-[#D946EF] cursor-pointer transition-colors"><Link to="/about">About us</Link></li>
          <li className="hover:text-[#D946EF] cursor-pointer transition-colors"><Link to="/contact">Contact us</Link></li>
          <li className="hover:text-[#D946EF] cursor-pointer transition-colors"><Link to="/resources">Resources</Link></li>
          <li className="hover:text-[#D946EF] cursor-pointer transition-colors"><Link to="/pricing">Pricing</Link></li>
        </ul>

        <div className="hidden md:block">
          <Link to="/request-demo">
            <button className="bg-[#D946EF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#C026D3] transition-colors">
              Request Demo
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 border-t border-white/10 mt-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4 text-center text-lg">
            <li className="hover:text-[#D946EF] cursor-pointer"><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li className="hover:text-[#D946EF] cursor-pointer"><Link to="/about" onClick={() => setIsOpen(false)}>About us</Link></li>
            <li className="hover:text-[#D946EF] cursor-pointer"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact us</Link></li>
            <li className="hover:text-[#D946EF] cursor-pointer"><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></li>
            <li className="hover:text-[#D946EF] cursor-pointer"><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
          </ul>
          <Link to="/request-demo" className="w-3/4" onClick={() => setIsOpen(false)}>
            <button className="bg-[#D946EF] text-white px-6 py-3 rounded-lg font-semibold w-full">
              Request Demo
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}