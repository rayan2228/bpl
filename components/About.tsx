import Image from "next/image"
import aboutImg from "@/assets/images/about.png"
import seasonImg from "@/assets/images/season.png"
import starIcon from "@/assets/icons/star.svg"
import shieldIcon from "@/assets/icons/shield.svg"
import powerIcon from "@/assets/icons/power.svg"

const About = () => {
    return (
        <section className="py-20 md:py-[180px]">
            <div className="container">
                
                {/* Responsive Wrapper */}
                <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-15">
                    
                    {/* LEFT SECTION */}
                    <div className="flex-1 text-primary-color-four">
                        <h4 className="bg-primary-color-four text-primary-color-one font-semibold inline-block p-2 rounded-full tracking-widest">
                            THE ROYAL ORIGIN
                        </h4>

                        <h1 className="text-[32px] md:text-[64px] font-bold leading-tight mt-4">
                            Chattogram Royals
                        </h1>

                        <p className="text-lg leading-[150%] border-l-2 border-l-primary-color-one pl-6 md:pl-8 text-justify my-6 max-w-[704px]">
                            Chattogram Royals is inspired by a city shaped by the sea and strengthened through heritage. 
                            As Bangladesh’s maritime gateway, Chattogram has always stood for resilience, ambition and a 
                            deep sense of identity. Our team rises from that same spirit – from a coastline where ships 
                            carry stories, from streets filled with pride and from people who never back down. 
                            Our emblem reflects who we are: grounded like an anchor, united like a shield and driven with
                            the mindset of royalty. Just as the port moves with unstoppable momentum, Chattogram Royals
                            steps onto the field with purpose and belief.
                        </p>

                        <h6 className="text-xl md:text-2xl font-semibold italic max-w-[566px]">
                            At our core, we carry the three qualities that define both our city and our team.
                        </h6>

                        {/* ICON BOXES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                            <div className="bg-gray-200 p-3 rounded-2xl text-center md:text-left w-full">
                                <Image src={shieldIcon} alt="shield" className="mx-auto md:mx-0" />
                                <h6 className="mt-5 text-primary-color-four text-sm">Pride In Our Roots</h6>
                            </div>

                            <div className="bg-gray-200 p-3 rounded-2xl text-center md:text-left w-full">
                                <Image src={powerIcon} alt="power" className="mx-auto md:mx-0" />
                                <h6 className="mt-5 text-primary-color-four text-sm">Power In Our Play</h6>
                            </div>

                            <div className="bg-gray-200 p-3 rounded-2xl text-center md:text-left w-full">
                                <Image src={starIcon} alt="star" className="mx-auto md:mx-0" />
                                <h6 className="mt-5 text-primary-color-four text-sm">Passion In Everything We Do</h6>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="w-full lg:w-[610px] relative flex justify-center lg:justify-end">
                        <Image src={aboutImg} alt="about" className="w-full max-w-[500px] lg:max-w-none" />
                        <Image 
                            src={seasonImg} 
                            alt="season" 
                            className="absolute -right-6 md:-right-12 -top-6 md:-top-9 w-[120px] md:w-auto"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
