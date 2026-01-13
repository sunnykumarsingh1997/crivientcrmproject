import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import crm1 from '../assets/crm1.jpeg';
import crm2 from '../assets/crm2.jpeg';
import crm3 from '../assets/crm3.jpeg';

export default function Documentation() {
    return (
        <div className="font-sans text-white bg-[#111827] min-h-screen">
            <div className="bg-[#020617] text-white py-20 px-6 text-center shadow-md">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">CRM Product Documentation</h1>
                <p className="text-xl text-gray-400">Comprehensive guide to features, configuration, and usage.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Sidebar Navigation */}
                <aside className="hidden md:block col-span-1 sticky top-24 h-fit">
                    <nav className="space-y-4 border-l-2 border-gray-700 pl-4">
                        <a href="#introduction" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">1. Introduction</a>
                        <a href="#system-overview" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">2. System Overview</a>
                        <a href="#core-modules" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">3. Core Modules</a>
                        <a href="#automation" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">4. Automation</a>
                        <a href="#reports" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">5. Reports</a>
                        <a href="#user-management" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">6. User Management</a>
                        <a href="#data-import" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">7. Data Import</a>
                        <a href="#security" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">8. Security</a>
                        <a href="#best-practices" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">9. Best Practices</a>
                        <a href="#support" className="block text-gray-400 hover:text-[#D946EF] hover:border-l-2 hover:border-[#D946EF] -ml-[18px] pl-4 transition-all">10. Support</a>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="col-span-1 md:col-span-3 space-y-16">

                    {/* 1. Introduction */}
                    <section id="introduction" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">1. Introduction</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                            <p className="text-lg leading-relaxed text-gray-300 mb-6">
                                The Customer Relationship Management (CRM) system helps organizations manage customer data, track interactions, automate sales processes, and improve customer relationships. It provides a centralized platform for sales, marketing, and support teams to collaborate efficiently.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-300">
                                This document explains the core features, configuration steps, and usage guidelines for the CRM.
                            </p>
                        </div>
                    </section>

                    {/* 2. System Overview */}
                    <section id="system-overview" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">2. System Overview</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700 mb-8">
                            <p className="text-lg leading-relaxed text-gray-300 mb-4">
                                The CRM consists of the following main modules:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
                                <li>Contacts & Accounts</li>
                                <li>Leads & Opportunities</li>
                                <li>Sales Pipeline</li>
                                <li>Activities & Tasks</li>
                                <li>Automation & Workflows</li>
                                <li>Reports & Analytics</li>
                            </ul>
                            <p className="text-lg leading-relaxed text-gray-300">
                                Each module is designed to support the complete customer lifecycle.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <img src={crm1} alt="CRM Dashboard Overview" className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full object-cover h-64 border border-gray-700" />
                            <img src={crm2} alt="CRM Analytics" className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full object-cover h-64 border border-gray-700" />
                        </div>
                    </section>

                    {/* 3. Core Modules */}
                    <section id="core-modules" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">3. Core Modules</h2>
                        <div className="space-y-8">
                            {/* 3.1 Contacts */}
                            <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                                <h3 className="text-2xl font-semibold mb-4 text-[#D946EF]">3.1 Contacts Management</h3>
                                <p className="text-gray-300 mb-4">The Contacts module stores all customer and prospect information in one place.</p>
                                <h4 className="font-semibold mb-2 text-white">Key Functions:</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                    <li>Create and update contact records</li>
                                    <li>Store email, phone, company, and custom fields</li>
                                    <li>Track interaction history (calls, emails, meetings)</li>
                                    <li>Search and filter contacts</li>
                                </ul>
                            </div>

                            {/* 3.2 Lead Management */}
                            <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                                <h3 className="text-2xl font-semibold mb-4 text-[#D946EF]">3.2 Lead Management</h3>
                                <p className="text-gray-300 mb-4">Leads represent potential customers who have not yet been qualified.</p>
                                <h4 className="font-semibold mb-2 text-white">Key Functions:</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                    <li>Capture leads manually or through imports and integrations</li>
                                    <li>Assign leads to users or teams</li>
                                    <li>Track lead status and source</li>
                                    <li>Convert qualified leads into contacts and opportunities</li>
                                </ul>
                            </div>

                            {/* 3.3 Sales Pipeline */}
                            <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                                <h3 className="text-2xl font-semibold mb-4 text-[#D946EF]">3.3 Sales Pipeline & Opportunities</h3>
                                <p className="text-gray-300 mb-4">The Sales Pipeline visualizes the sales process from initial contact to deal closure.</p>
                                <h4 className="font-semibold mb-2 text-white">Key Functions:</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                    <li>Create opportunities with deal value and expected close date</li>
                                    <li>Move deals through configurable stages</li>
                                    <li>Monitor deal progress and probability</li>
                                    <li>Forecast revenue</li>
                                </ul>
                                <div className="mt-8">
                                    <img src={crm3} alt="Sales Pipeline Visualization" className="rounded-xl shadow-lg w-full object-cover h-64 border border-gray-700" />
                                </div>
                            </div>

                            {/* 3.4 Activities */}
                            <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                                <h3 className="text-2xl font-semibold mb-4 text-[#D946EF]">3.4 Activities & Tasks</h3>
                                <p className="text-gray-300 mb-4">Activities help users manage daily work and follow-ups.</p>
                                <h4 className="font-semibold mb-2 text-white">Key Functions:</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                    <li>Schedule calls, meetings, and reminders</li>
                                    <li>Assign tasks to users</li>
                                    <li>Track completed and pending activities</li>
                                    <li>Link activities to contacts, leads, or opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. Automation */}
                    <section id="automation" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">4. Automation & Workflows</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                            <p className="text-gray-300 mb-4">Automation reduces manual work and improves consistency.</p>
                            <h4 className="font-semibold mb-2 text-white">Capabilities:</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2 mb-4">
                                <li>Automatically assign leads</li>
                                <li>Send follow-up notifications</li>
                                <li>Update fields based on conditions</li>
                                <li>Trigger actions when deal stages change</li>
                            </ul>
                            <p className="text-gray-400 italic">Workflows can be customized based on business rules.</p>
                        </div>
                    </section>

                    {/* 5. Reports */}
                    <section id="reports" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">5. Reports & Analytics</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                            <p className="text-gray-300 mb-4">The Reports module provides insights into sales and customer performance.</p>
                            <h4 className="font-semibold mb-2 text-white">Available Reports:</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2 mb-4">
                                <li>Sales pipeline reports</li>
                                <li>Lead conversion reports</li>
                                <li>User activity reports</li>
                                <li>Revenue and performance summaries</li>
                            </ul>
                            <p className="text-gray-300">Reports can be filtered, exported, and shared.</p>
                        </div>
                    </section>

                    {/* 6. User Management */}
                    <section id="user-management" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">6. User Management & Permissions</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                            <p className="text-gray-300 mb-4">Administrators can control system access using roles and permissions.</p>
                            <h4 className="font-semibold mb-2 text-white">Features:</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                <li>Create user roles (Admin, Manager, User)</li>
                                <li>Restrict access to modules and data</li>
                                <li>Maintain data security and accountability</li>
                            </ul>
                        </div>
                    </section>

                    {/* 7. Data Import */}
                    <section id="data-import" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">7. Data Import & Export</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                            <p className="text-gray-300 mb-4">The CRM supports data migration and sharing.</p>
                            <h4 className="font-semibold mb-2 text-white">Options:</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                <li>Import contacts, leads, and deals using CSV files</li>
                                <li>Export data for backup or analysis</li>
                                <li>Validate data during import to avoid duplication</li>
                            </ul>
                        </div>
                    </section>

                    {/* 8. Security */}
                    <section id="security" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">8. Security & Data Protection</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700">
                            <p className="text-gray-300 mb-4">The CRM ensures secure handling of customer data.</p>
                            <h4 className="font-semibold mb-2 text-white">Security Measures:</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                <li>Role-based access control</li>
                                <li>Encrypted data storage</li>
                                <li>Secure authentication</li>
                                <li>Regular system backups</li>
                            </ul>
                        </div>
                    </section>

                    {/* 9. Best Practices */}
                    <section id="best-practices" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">9. Best Practices</h2>
                        <div className="bg-[#1F2937] p-8 rounded-2xl shadow-lg border border-gray-700 border-l-4 border-l-[#D946EF]">
                            <ul className="list-none space-y-3 text-lg text-gray-300">
                                <li className="flex items-start gap-3"><span className="text-[#D946EF] font-bold">✓</span> Keep customer data accurate and updated</li>
                                <li className="flex items-start gap-3"><span className="text-[#D946EF] font-bold">✓</span> Use automation to reduce repetitive tasks</li>
                                <li className="flex items-start gap-3"><span className="text-[#D946EF] font-bold">✓</span> Review reports regularly to track performance</li>
                                <li className="flex items-start gap-3"><span className="text-[#D946EF] font-bold">✓</span> Train users on standardized workflows</li>
                            </ul>
                        </div>
                    </section>

                    {/* 10. Support */}
                    <section id="support" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold mb-6 text-white">10. Support & Assistance</h2>
                        <div className="bg-[#111827] text-white p-8 rounded-2xl shadow-lg border border-gray-700">
                            <p className="mb-6 text-lg text-gray-300">
                                Users can access help through:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-700 hover:border-[#D946EF] transition-colors">
                                    <h5 className="font-bold text-[#D946EF] mb-2">In-app</h5>
                                    <p className="text-sm text-gray-300">Tooltips and guides</p>
                                </div>
                                <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-700 hover:border-[#D946EF] transition-colors">
                                    <h5 className="font-bold text-[#D946EF] mb-2">Online</h5>
                                    <p className="text-sm text-gray-300">Documentation and FAQs</p>
                                </div>
                                <div className="bg-[#1F2937] p-6 rounded-xl border border-gray-700 hover:border-[#D946EF] transition-colors">
                                    <h5 className="font-bold text-[#D946EF] mb-2">Support</h5>
                                    <p className="text-sm text-gray-300">Technical issues</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
