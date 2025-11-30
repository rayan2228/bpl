import allRounderIcon from "@/assets/icons/allRounder.png";
import badgeIcon from "@/assets/icons/badge.svg";
import bowlerIcon from "@/assets/icons/bowler.png";
import cursorIcon from "@/assets/icons/cursor.svg";
import matchIcon from "@/assets/icons/match.svg";
import abrarImg from "@/assets/images/abrar.png";
import lineupBg from "@/assets/images/lineupBg.png";
import mahadiImg from "@/assets/images/mahadi.png";
import tanvirImg from "@/assets/images/tanvir.png";
import Image from "next/image";

const players = [
    {
        img: tanvirImg,
        icon: bowlerIcon,
        name: "Tanvir Islam",
        role: "Spinner",
        exp: "3+ Years",
        matches: "ODI: 9, T20I: 6",
    },
    {
        img: mahadiImg,
        icon: allRounderIcon,
        name: "Sheikh Mahedi Hasan",
        role: "All-Rounder",
        exp: "8+ Years",
        matches: "ODI: 11, T20I: 68",
    },
    {
        img: abrarImg,
        icon: bowlerIcon,
        name: "Abrar Ahmed",
        role: "Spinner",
        exp: "3+ Years",
        matches: "Test: 10, ODI: 9–11, T20I: 3–5",
    },
];

const LineUp = () => {
    return (
        <section className="bg-primary-color-four pt-[78px] pb-[138px] text-center relative px-2 md:px-0">
            <h4 className="text-primary-color-one rounded-full tracking-wider border border-primary-color-one inline-block p-2">
                THE ROYAL LINE-UP
            </h4>

            <h2 className="font-medium text-[32px] text-white w-[655px] max-w-full m-auto leading-10 mt-8 mb-14">
                Presenting the first pillars of our squad - skilled, seasoned and ready for battle
            </h2>

            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 relative z-50">
                    <div className="absolute inset-0 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10 flex justify-center">
                        <div className="sm:w-[80%] h-[300px] w-0 bg-[#017CFF] opacity-40 blur-3xl rounded-full shadow-[0_0_60px_20px_rgba(1,124,255,0.7)]"></div>
                    </div>
                    {players.map((p, i) => (
                        <div
                            key={i}
                            className="p-0.5 rounded-2xl bg-linear-to-br from-[#00071D] to-[#F7C848] h-full"
                        >
                            <div className="bg-primary-color-four text-white text-left relative rounded-2xl p-4 h-full flex flex-col">
                                {/* Image Section */}
                                <div className="relative min-h-[200px] w-full flex justify-center">
                                    <Image
                                        src={p.img}
                                        alt={p.name}
                                        className="object-contain"
                                    />
                                    <Image
                                        src={p.icon}
                                        alt={p.role}
                                        className="absolute -top-10 left-4"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="mt-4 flex flex-col grow">
                                    <h4 className="text-2xl font-medium">{p.name}</h4>

                                    <h5 className="text-gray-200 pb-6 mb-6 border-b border-gray-100/50 mt-1.5">
                                        {p.role}
                                    </h5>

                                    <div className="flex items-center gap-2 justify-between flex-wrap">
                                        <div className="flex items-center w-[48%] gap-2 text-primary-color-one uppercase">
                                            <Image src={badgeIcon} alt="badge" />
                                            <h6>Experience</h6>
                                        </div>

                                        <div className="flex items-center w-[48%] gap-2 justify-end text-primary-color-one uppercase">
                                            <Image src={matchIcon} alt="match" />
                                            <h6>Matches</h6>
                                        </div>

                                        <h6 className="w-[48%]">{p.exp}</h6>
                                        <h6 className="w-[48%] text-right">{p.matches}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h6
                className="
        absolute 
        left-1/2 
        transform -translate-x-1/2 
        bottom-0 
        text-primary-color-four 
        flex items-center gap-3 
        w-full max-w-[462px] 
        px-3 py-3 
        justify-center 
        text-sm md:text-base
        rounded-t-2xl
        bg-cover bg-no-repeat
    "
                style={{
                    backgroundImage: `url(${lineupBg.src})`,
                }}
            >
                <Image src={cursorIcon} alt="cursor" className="w-4 md:w-6" />
                <span>More players to be unveiled soon</span>
            </h6>

        </section>
    );
};

export default LineUp;
