import React from 'react';
import { BookOpen, Rocket, Users, Zap, BarChart2, Briefcase, Shield, CheckCircle } from "lucide-react";

export default function KnowledgeBase() {
    const cards = [
        {
            icon: <BookOpen className="text-[#D946EF]" size={32} />,
            title: "Knowledge Base Overview",
            content: [
                "A Customer Relationship Management (CRM) system is more than just software; it is a strategic approach to managing interactions with current and potential customers. The primary goal of a knowledge base in this context is to bridge the gap between technical functionality and business strategy.",
                "By providing teams with a deep understanding of CRM capabilities, organizations can ensure consistency in data management, improve communication across departments, and ultimately drive better business outcomes. This resource serves as a foundational guide for teams looking to fully leverage their CRM investment."
            ]
        },
        {
            icon: <Rocket className="text-[#D946EF]" size={32} />,
            title: "Getting Started",
            content: [
                "Successfully adopting a CRM begins with a clear understanding of its structure and core components. Fundamental to this is the concept of a 'single source of truth,' where all customer data resides in one centralized location. Configuring user roles and permissions is the first critical step in system setup.",
                "Onboarding new users involves more than just login credentials; it requires familiarization with the dashboard and navigation interface. A well-configured dashboard provides an at-a-glance view of daily tasks, upcoming appointments, and key performance indicators, ensuring users can find information quickly."
            ]
        },
        {
            icon: <Users className="text-[#D946EF]" size={32} />,
            title: "Sales & Customer Management",
            content: [
                "At the heart of any CRM is the ability to manage the sales pipeline and customer relationships effectively. Lead management moves beyond simple data entry to include qualification, scoring, and segmentation. By categorizing leads based on their engagement level, sales teams can prioritize their efforts.",
                "Long-term customer engagement relies on maintaining accurate and up-to-date records. A CRM enables teams to set reminders for follow-ups, note specific customer preferences, and track support history. This comprehensive view allows for proactive account management and personalized communication."
            ]
        },
        {
            icon: <Zap className="text-[#D946EF]" size={32} />,
            title: "Automation & Integrations",
            content: [
                "Workflow automation is a powerful feature that removes manual usage from daily operations. By automating repetitive tasks such as data entry, email follow-ups, and task assignment, teams can reclaim valuable time to focus on strategy and relationship building.",
                "Integration with external tools amplifies the power of a CRM. Connecting the platform with email clients, marketing automation software, and customer support help desks creates a seamless flow of information. This interoperability ensures that data is not siloed in different applications."
            ]
        },
        {
            icon: <BarChart2 className="text-[#D946EF]" size={32} />,
            title: "Advanced Features",
            content: [
                "As organizations grow, their CRM needs become more complex. Custom fields allow businesses to tailor the data structure to their specific industry requirements, capturing unique data points. Analytics and reporting features turn raw data into actionable insights.",
                "Forecasting leverages historical data to predict future revenue. By analyzing past deal cycles and win rates, a CRM can generate accurate sales forecasts. Scalability ensures that as the volume of data grows, the system remains performant and organized."
            ]
        },
        {
            icon: <Briefcase className="text-[#D946EF]" size={32} />,
            title: "Use Cases & Real-World Applications",
            content: [
                "For small businesses, the focus is often on organization and efficiency—moving away from spreadsheets to a centralized system. The CRM acts as a digital rolodex with superpowers, managing contacts and simple pipelines.",
                "For enterprise sales teams, the use case shifts towards complex account management and territory planning. Here, the CRM manages hierarchical relationships, tracks multiple stakeholders, and coordinates activities across large, distributed sales teams."
            ]
        },
        {
            icon: <Shield className="text-[#D946EF]" size={32} />,
            title: "Security & Best Practices",
            content: [
                "Protecting customer data is paramount. Security best practices in a CRM environment involve a combination of technical controls and user protocols. Role-Based Access Control (RBAC) ensures that users only have access to the data necessary for their specific job function.",
                "Data integrity is maintained through regular backups and validation rules. Compliance with regulations such as GDPR or CCPA is facilitated by features that manage consent and data suppression, ensuring the CRM is a secure vault for customer information."
            ]
        },
        {
            icon: <CheckCircle className="text-[#D946EF]" size={32} />,
            title: "Summary",
            content: [
                "Mastering a CRM platform is a journey of continuous improvement. By understanding the core concepts of data management, automation, security, and analytics, teams can transform their CRM from a passive database into an active engine for growth.",
                "Success depends not just on the technology, but on the processes and people who use it. Regular training, adherence to best practices, and a commitment to data quality will ensure that your CRM remains a valuable asset for years to come."
            ]
        }
    ];

    return (
        <div className="bg-[#111827] min-h-screen text-gray-300 font-sans">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Knowledge Base</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Access a comprehensive collection of articles, best practices, and real-world use cases to help your team fully leverage CRM capabilities.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className="bg-[#1F2937] rounded-xl p-8 shadow-lg hover:shadow-[#D946EF]/10 hover:-translate-y-1 transition-all duration-300 border border-gray-800 hover:border-[#D946EF]/30 group"
                        >
                            <div className="mb-6 bg-gray-800/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#D946EF]/10 transition-colors">
                                {card.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D946EF] transition-colors">
                                {card.title}
                            </h2>
                            <div className="space-y-4">
                                {card.content.map((paragraph, i) => (
                                    <p key={i} className="leading-relaxed text-gray-400 mb-4 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <footer className="mt-20 pt-10 border-t border-gray-800 text-center text-gray-500">
                    <p>© 2024 CRM Platform Knowledge Base. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
