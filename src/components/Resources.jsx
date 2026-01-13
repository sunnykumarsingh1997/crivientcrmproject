import { Link } from "react-router-dom";
import {
    LifeBuoy,
    BookOpen,
    FileText,
    Headphones,
    ArrowRight,
    Search
} from "lucide-react";

export default function Resources() {
    return (
        <div className="bg-[#111827]">
            {/* Hero Section */}
            <section className="bg-[#020617] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">CRM Software Resources</h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
                    Our Resources page is designed to help you get the most value from our CRM software. Whether you
                    are onboarding your team, optimizing workflows, or scaling customer operations, you’ll find the
                    guidance, documentation, and support you need in one place.
                </p>
                <button className="bg-[#D946EF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#C026D3] transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                    Explore All Resources <ArrowRight size={20} />
                </button>
            </section>

            {/* Main Content Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Help Center */}
                    <div className="bg-[#1F2937] p-10 rounded-2xl hover:shadow-xl transition-all border border-gray-700 flex flex-col items-start">
                        <div className="bg-gray-800 p-4 rounded-full shadow-sm mb-6">
                            <LifeBuoy className="text-[#D946EF]" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Help Center</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                            Find quick answers and step-by-step guidance through our centralized Help Center. It is built to help
                            users resolve issues efficiently and continue working without disruption.
                        </p>
                        <button className="text-[#D946EF] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group">
                            Visit Help Center <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Knowledge Base */}
                    <div className="bg-[#1F2937] p-10 rounded-2xl hover:shadow-xl transition-all border border-gray-700 flex flex-col items-start">
                        <div className="bg-gray-800 p-4 rounded-full shadow-sm mb-6">
                            <BookOpen className="text-[#D946EF]" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Knowledge Base</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                            Access a comprehensive collection of articles, best practices, and real-world use cases to help your
                            team fully leverage CRM capabilities.
                        </p>
                        <button className="text-[#D946EF] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group">
                            Browse Knowledge Base <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Product Documentation */}
                    <div className="bg-[#1F2937] p-10 rounded-2xl hover:shadow-xl transition-all border border-gray-700 flex flex-col items-start">
                        <div className="bg-gray-800 p-4 rounded-full shadow-sm mb-6">
                            <FileText className="text-[#D946EF]" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Product Documentation</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                            Explore detailed documentation covering CRM features, configurations, integrations, security, and
                            automation.
                        </p>
                        <Link to="/documentation" className="text-[#D946EF] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group">
                            View Documentation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Support & Assistance */}
                    <div className="bg-[#1F2937] p-10 rounded-2xl hover:shadow-xl transition-all border border-gray-700 flex flex-col items-start">
                        <div className="bg-gray-800 p-4 rounded-full shadow-sm mb-6">
                            <Headphones className="text-[#D946EF]" size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">Support & Assistance</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                            Need personalized help? Our support team is available to provide timely and professional assistance
                            whenever you need it.
                        </p>
                        <button className="text-[#D946EF] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group">
                            Contact Support <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>

                {/* Optional: Search Bar Section (Common in resource pages) */}
                <div className="mt-20 bg-[#020617] rounded-2xl p-12 text-center relative overflow-hidden border border-gray-800">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Search size={120} className="text-white" />
                    </div>

                    <h2 className="text-3xl text-white font-bold mb-6 relative z-10">Can't find what you're looking for?</h2>
                    <div className="flex max-w-md mx-auto relative z-10">
                        <input
                            type="text"
                            placeholder="Search resources..."
                            className="w-full px-6 py-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#D946EF] text-white bg-gray-800 border-y border-l border-gray-700"
                        />
                        <button className="bg-[#D946EF] text-white px-6 py-4 rounded-r-lg font-bold hover:bg-[#C026D3] transition-colors">
                            Search
                        </button>
                    </div>
                </div>

            </section>
        </div>
    );
}
