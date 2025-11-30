import heroBg from "@/assets/images/heroBg.png";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={heroBg}
                    alt="Chattogram Royals"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text at Bottom Center */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 text-center px-4 w-full ">
                <h1 className="text-[28px] leading-tight md:text-[64px] font-bold text-white ">
                    Chattogram Royal Is Arriving
                </h1>

                <p className="mt-4 text-base md:text-2xl font-medium text-gray-200 leading-snug">
                    The pride of the port city. The heartbeat of millions.
                </p>
            </div>

        </section>
    );
};

export default Hero;
