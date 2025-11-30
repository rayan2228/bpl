import heroBg from "@/assets/images/heroBg.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full py-[400px] ">

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

            {/* Text Content */}
            <div className="absolute bottom-16 md:bottom-30 left-1/2 transform -translate-x-1/2 text-center px-4 w-full max-w-6xl">
                <h1 className="text-[28px] leading-tight md:text-[64px] font-bold text-white drop-shadow-lg">
                    Chattogram Royal Is Arriving
                </h1>

                <p className="mt-4 text-base md:text-2xl font-medium text-gray-200 leading-snug">
                    The pride of the port city. The heartbeat of millions.
                </p>
            </div>
            {/* Scroll Down Button */}
            <Link
                href="#about"
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-white"
            >
                {/* Animated Arrow */}
                <div className="w-6 h-10 border-2 border-blue-900 rounded-full flex items-start justify-center after:content-[''] after:w-0.5 after:h-5 after:bg-gray-100/50 after:mt-1.5  relative after:absolute after:-bottom-10">
                    <div className="w-3.5 h-[17px] bg-primary-color-one rounded-full animate-bounce mt-1"></div>
                </div>
            </Link>


        </section>
    );
};

export default Hero;
