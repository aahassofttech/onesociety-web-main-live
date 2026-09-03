import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppDownloadCTA from "@/components/sections/AppDownloadCTA";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";

const blogs = [
    {
        date: "May 15, 2026",
        title: "Apartment Security: Smart vs Traditional",
        image: "/images/home-hero.png",
        link: "#",
    },
    {
        date: "May 12, 2026",
        title: "How Visitor Management Improves Safety",
        image: "/images/home-hero.png",
        link: "#",
    },
    {
        date: "May 08, 2026",
        title: "Digital Payments for Housing Societies",
        image: "/images/home-hero.png",
        link: "#",
    },
];

import Breadcrumb from "@/components/layout/breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";


export const metadata: Metadata = buildMetadata({
    path: "/blogs",
    title: "Blogs",
    description:
        "Insights on community living, apartment security, visitor management, and running a modern housing society.",
});


export default function BlogsPage() {
    return (
        <>
            <Header />
            <Breadcrumb
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
            />
            <main>

                <section className="py-16 lg:py-24 bg-white">
                    <div className="container-custom">
                        <SectionHeading
                            tag="Our Blogs"
                            title="Building the future of community living"
                            center
                        />

                        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">

                            {/* Featured Blog */}
                            <div className="relative overflow-hidden rounded-[35px] min-h-[780px]">

                                <img
                                    src="/images/home-hero.png"
                                    alt="Featured Blog"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14 text-white">

                                    <h3 className="text-3xl font-bold mb-5">
                                        Fullstack RWA Toolkit
                                    </h3>

                                    <p className="text-white/90 leading-7 max-w-xl mb-8">
                                        A comprehensive society ERP that brings together all aspects
                                        of community management, accounting, audit, vendors,
                                        security, communication and more.
                                    </p>

                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-[#082052] text-white px-5 py-2.5 rounded-md font-semibold"
                                    >
                                        Learn More
                                        <span>→</span>
                                    </Link>

                                </div>
                            </div>

                            {/* Side Blogs */}
                            <div className="flex flex-col gap-5">

                                {blogs.map((blog, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-[25px] shadow-md p-[18px]"
                                    >
                                        <div className="flex flex-col md:flex-row gap-4">

                                            <div className="w-full md:w-[256px] h-[211px] rounded-[15px] overflow-hidden flex-shrink-0">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            <div className="flex flex-col justify-center">

                                                <p className="text-[16px] font-semibold text-black/70 mb-3">
                                                    {blog.date}
                                                </p>

                                                <h4 className="text-xl font-semibold text-[#131313] leading-7 mb-6">
                                                    {blog.title}
                                                </h4>

                                                <Link
                                                    href={blog.link}
                                                    className="inline-flex items-center gap-2 bg-[#082052] text-white px-5 py-2 rounded-md text-sm font-semibold w-fit"
                                                >
                                                    Read More
                                                    <span>→</span>
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>
                </section>

                <AppDownloadCTA />

                <ContactSection showHeading={false} />

            </main>
            <Footer />
        </>
    );
}
