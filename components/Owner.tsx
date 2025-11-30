import badgeImg from "@/assets/icons/badge.svg"
import ourMentorLogo from "@/assets/images/ourMentor.png"
import ownerImg from "@/assets/images/owner.png"
import quoteImg from "@/assets/icons/quote.svg"
import Image from 'next/image'

const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "161", label: "Matches" },
    { number: "100+", label: "Players Mentored" },
];

const Owner = () => {
    return (
        <section className="py-20 md:py-[180px] px-2 md:px-0">
            <div className="container">

                {/* MAIN WRAPPER */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-10">

                    {/* LEFT COLUMN */}
                    <div className="w-full lg:w-[610px] flex flex-col items-center lg:items-start">
                        <Image
                            src={ownerImg}
                            alt="Habibul Bashar Sumon"
                            className="w-full max-w-[500px] lg:max-w-none"
                        />

                        <div className="flex items-center gap-4 font-semibold text-2xl md:text-4xl text-primary-color-four mt-6">
                            <Image src={ourMentorLogo} alt="our mentor" />
                            <h6>Mentor & Team Manager</h6>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex-1 text-primary-color-four">

                        <h2 className="font-medium text-3xl md:text-4xl">
                            Habibul Bashar Sumon
                        </h2>

                        <p className="text-lg italic mb-10 mt-2 relative after:content-[''] after:w-[180px] after:h-1 after:absolute after:-bottom-1 after:left-0 after:bg-blue-400">
                            Meet the elite athletes who will lead Chattogram Royals to victory
                        </p>

                        {/* STATS CARD GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 uppercase">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-primary-color-four rounded-2xl p-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <h6 className="text-[32px] text-white">{item.number}</h6>
                                        <Image src={badgeImg} alt="badge" />
                                    </div>
                                    <p className="text-sm text-gray-200">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg md:text-xl mt-10 mb-16">
                            With over two decades of coaching excellence across international cricket,
                            Mentor Habibul Bashar Sumon brings unparalleled strategic insight and leadership
                            to Chattogram Royals.
                        </p>

                        {/* QUOTE BOX */}
                        <div className="bg-[rgba(1,124,255,0.20)] p-8 border-l-2 border-l-[#161C89] rounded-2xl">
                            <Image src={quoteImg} alt="quote" />

                            <p className="text-sm my-4 italic">
                                {`"Cricket is not just about skills, it's about character, discipline, and the will to win. 
At Chattogram Royals, we're building more than a team – we're building a legacy."`}
                            </p>


                            <h6 className="text-sm relative after:w-12 after:h-0.5 after:bg-primary-color-four after:absolute after:left-0 after:top-1/2 after:content-[''] pl-15">
                                Habibul Bashar Sumon
                            </h6>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Owner;
