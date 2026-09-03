"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";

const featureTabs = [
    {
        id: "residents",
        title: "For Residents",
        items: [
            {
                title: "Visitor Management System",
                description:
                    "Approve visitors, deliveries, and service providers instantly with a secure visitor management system software. Stay informed even when you're away from home.",
                image: "/images/features/visitor-management.svg",
            },
            {
                title: "Society Management App",
                description:
                    "Access everything from one society management app. Pay maintenance dues, book amenities, receive notices, raise complaints, and stay connected with your community.",
                image: "/images/features/society-app.svg",
            },
            {
                title: "Maintenance & Bill Payments",
                description:
                    "Pay maintenance charges online, track payment history, and receive digital invoices and reminders, all from one place.",
                image: "/images/features/maintenance-billing.svg",
            },
            {
                title: "Complaint Management",
                description:
                    "Report maintenance issues in seconds, track progress in real time, and receive updates until your request is resolved.",
                image: "/images/features/complaint-management.svg",
            },
            {
                title: "Community Communication",
                description:
                    "Stay updated with society announcements, meeting notices, emergency alerts, and community events through one centralised platform.",
                image: "/images/features/community-communication.svg",
            },
        ],
    },
    {
        id: "management",
        title: "For Society Management & RWAs",
        items: [
            {
                title: "Apartment Management Software",
                description:
                    "Manage residents, apartments, approvals, notices, and community records with powerful apartment management software built for modern communities.",
                image: "/images/features/apartment-management.svg",
            },
            {
                title: "Society Accounting Software",
                description:
                    "Simplify maintenance billing, expense tracking, financial reports, audits, and collections with integrated society accounting software.",
                image: "/images/features/accounting.svg",
            },
            {
                title: "Vendor Management System",
                description:
                    "Organize vendors, approve access, maintain service records, and manage contracts efficiently with a centralized Vendor Management System.",
                image: "/images/features/vendor-management.svg",
            },
            {
                title: "Reports & Analytics",
                description:
                    "Access real-time reports and operational insights to make informed decisions for your community.",
                image: "/images/features/reports-analytics.svg",
            },
        ],
    },
    {
        id: "security",
        title: "Security Teams",
        items: [
            {
                title: "Visitor Management System",
                description:
                    "Secure every entry with a smart visitor management system. Verify guests, approve visitors, manage deliveries, and maintain digital gate logs.",
                image: "/images/features/security-visitor.svg",
            },
            {
                title: "Parking Management System",
                description:
                    "Manage resident and visitor parking, assign parking spaces, and monitor vehicle movement with a smart Parking Management System.",
                image: "/images/features/parking-management.svg",
            },
            {
                title: "Staff & Vendor Monitoring",
                description:
                    "Track attendance, entry, and exit of domestic staff and vendors while preventing unauthorized access to the community.",
                image: "/images/features/staff-monitoring.svg",
            },
            {
                title: "Guard App",
                description:
                    "Give security personnel a simple, easy-to-use mobile app for visitor verification, gate management, vehicle tracking, and emergency response.",
                image: "/images/features/guard-app.svg",
            },
        ],
    },
];


export default function FeatureTabs() {

    const [activeTab, setActiveTab] = useState(featureTabs[0].id);

    const active = featureTabs.find((tab) => tab.id === activeTab);

    return (
        <section className="section-padding bg-neutral-light">
            <div className="container-custom">

                <SectionHeading
                    title="Our community ecosystem"
                    subtitle="A fully integrated suite of tools designed to simplify every aspect of gated community living - from security to maintenance."
                    center
                />


                {/* Tabs */}
                <div className="mt-12 border-b border-gray-200">
                    <div className="flex flex-wrap gap-12">
                        {featureTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative pb-4 text-lg font-medium transition-colors ${activeTab === tab.id
                                    ? "text-gray-900"
                                    : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {tab.title}

                                {activeTab === tab.id && (
                                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-red-500" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 pt-14">
                    {active?.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-6"
                        >

                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}