import Image from "next/image"
import aboutImg from "@/assets/images/about.png"
import seasonImg from "@/assets/images/season.png"
import starIcon from "@/assets/icons/star.svg"
import shieldIcon from "@/assets/icons/shield.svg"
import powerIcon from "@/assets/icons/power.svg"
const About = () => {
    return (
        <section className="py-[180px]">
            <div className="container">
                <div className="flex  gap-15 ">
                    <div className="flex-1 text-primary-color-four">
                        <h4 className="bg-primary-color-four text-primary-color-one font-semibold inline-block p-2 rounded-full tracking-widest">THE ROYAL ORIGIN</h4>
                        <h1 className="text-[64px] font-bold ">Chattogram Royals </h1>
                        <p className="text-lg  leading-[150%] w-[704px] border-l-2 border-l-primary-color-one pl-8 text-justify my-4">Chattogram Royals is inspired by a city shaped by the sea and strengthened through heritage. As Bangladesh’s maritime gateway, Chattogram has always stood for resilience, ambition and a deep sense of identity. Our team rises from that same spirit - from a coastline where ships carry stories, from streets filled with pride and from people who never back down.
                            Our emblem reflects who we are: grounded like an anchor, united like a shield and driven with the mindset of royalty. Just as the port moves with unstoppable momentum, Chattogram Royals steps onto the field with purpose and belief.</p>
                        <h6 className="text-2xl font-semibold italic w-[566px]">At our core, we carry the three qualities that define both our city and our team.</h6>
                        <div className="flex items-center gap-5 mt-8">
                            <div className="w-56 bg-gray-200 p-3 rounded-2xl">
                                <Image src={shieldIcon} alt="shield" />
                                <h6 className=" mt-5 text-primary-color-four text-sm">Pride In Our Roots</h6>
                            </div>
                            <div className="w-56 bg-gray-200 p-3 rounded-2xl">
                                <Image src={powerIcon} alt="power" />
                                <h6 className=" mt-5 text-primary-color-four text-sm">PPower In Our Play</h6>
                            </div>
                            <div className="w-56 bg-gray-200 p-3 rounded-2xl">
                                <Image src={starIcon} alt="star" />
                                <h6 className=" mt-5 text-primary-color-four text-sm">Passion In Everything We Do </h6>
                            </div>
                        </div>
                    </div>
                    <div className="w-[610px] relative "> <Image src={aboutImg} alt="about" /> <Image src={seasonImg} alt="season" className="absolute -right-18 -top-9 " /> </div>
                </div>
            </div>
        </section>
    )
}

export default About