import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ApplyForm() {
    const { plan } = useParams();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log("Application submitted for plan:", plan, "Data:", formData);
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="bg-[#111827] min-h-screen py-20 px-6 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-[#1F2937] p-8 rounded-2xl max-w-lg text-center border border-gray-700"
                >
                    <div className="flex justify-center mb-6">
                        <CheckCircle size={64} className="text-[#D946EF]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Application Received!</h2>
                    <p className="text-gray-300 mb-6">
                        Thank you for choosing the <span className="text-[#D946EF] font-semibold">{plan}</span> plan. Our team will review your application and get back to you shortly.
                    </p>
                    <Link to="/" className="inline-block bg-[#D946EF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c026d3] transition-colors">
                        Return Home
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-[#111827] min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                <Link to="/pricing" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Pricing
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Apply for <span className="text-[#D946EF]">{plan}</span> Plan
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            You are just one step away from streamlining your workflow. Fill out the form below to get started with the {plan} plan.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-semibold text-white mb-2">What happens next?</h3>
                                <ul className="space-y-4 mt-4">
                                    <li className="flex items-start text-gray-300">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D946EF]/20 text-[#D946EF] flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                        We review your application details
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D946EF]/20 text-[#D946EF] flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                        Our team sets up your dedicated environment
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D946EF]/20 text-[#D946EF] flex items-center justify-center mr-3 text-sm font-bold">3</span>
                                        You receive your login credentials via email
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#1F2937] p-8 md:p-10 rounded-2xl border border-gray-700 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name (Optional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                    placeholder="Acme Inc."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message or Special Requirements</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full bg-[#111827] border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#D946EF] focus:ring-1 focus:ring-[#D946EF] transition-colors"
                                    placeholder="Any specific needs?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#D946EF] hover:bg-[#c026d3] text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]"
                            >
                                <span>Submit Application</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
