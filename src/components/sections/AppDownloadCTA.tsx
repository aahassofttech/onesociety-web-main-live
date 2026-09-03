
export default function AppDownloadCTA() {
    return (
        <section >
            {/* App Download Section */}
            < div className="bg-neutral-light py-4 md:py-6 lg:py-8 px-4" >
                <div className="max-w-[1320px] mx-auto">
                    <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#082052] to-[#0A296A] shadow-lg">

                        <div className="flex flex-col lg:flex-row items-center justify-between">

                            {/* Left Content */}
                            <div className="px-4 md:px-8 lg:px-8 py-8 max-w-[700px] z-10">

                                <h2 className="text-white font-semibold text-2xl lg:text-3xl leading-tight mb-6">
                                    Download our App free and Enjoy Exclusive features!
                                </h2>

                                <p className="text-white/90 text-md lg:text-xl leading-relaxed mb-6">
                                    Access your community anytime with powerful tools designed for
                                    smarter, simpler everyday living.
                                </p>

                                {/* Store Buttons */}
                                <div className="flex flex-col sm:flex-row gap-5">

                                    {/* App Store */}
                                    <a
                                        href="#"
                                        className="bg-white rounded-xl px-4 py-2 flex items-center gap-5 shadow-sm hover:shadow-lg transition-all"
                                    >
                                        <img
                                            src="/images/icons/app-store.svg"
                                            alt="Mobile App"
                                            className="w-[30px] object-contain"
                                        />

                                        <div>
                                            <p className="text-xs text-gray-500">
                                                Available on
                                            </p>
                                            <p className="font-semibold text-xl text-black">
                                                App Store
                                            </p>
                                        </div>
                                    </a>

                                    {/* Google Play */}
                                    <a
                                        href="#"
                                        className="bg-white rounded-xl px-4 py-2 flex items-center gap-5 shadow-sm hover:shadow-lg transition-all"
                                    >
                                        <img
                                            src="/images/icons/playstore.svg"
                                            alt="Mobile App"
                                            className="w-[30px] object-contain"
                                        />

                                        <div>
                                            <p className="text-xs text-gray-500">
                                                Available on
                                            </p>
                                            <p className="font-semibold text-xl text-black">
                                                Google Play
                                            </p>
                                        </div>
                                    </a>

                                </div>
                            </div>

                            {/* Mobile Mockup */}
                            <div className="hidden lg:block relative lg:absolute lg:right-0 lg:bottom-0">
                                <img
                                    src="/images/mobile-app-preview.png"
                                    alt="Mobile App"
                                    className="w-[180px] md:w-[340px] lg:w-[180px] object-contain"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </section>
    );
}