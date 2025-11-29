import badgeImg from "@/assets/icons/badge.svg"
import ourMentorLogo from "@/assets/images/ourMentor.png"
import ownerImg from "@/assets/images/owner.png"
import Image from 'next/image'
import quoteImg from "@/assets/icons/quote.svg"
const Owner = () => {
    return (
        <section className='py-[180px]'>
            <div className="container">
                <div className="flex  gap-10">
                    <div className="w-[610px]">
                        <Image src={ownerImg} alt='Habibul Bashar Sumon' />
                        <div className="flex items-center gap-4 font-semibold text-4xl text-primary-color-four mt-5">
                            <Image src={ourMentorLogo} alt='our mentor' />
                            <h6>Mentor & Team Manager</h6>
                        </div>
                    </div>
                    <div className="flex-1 text-primary-color-four ">
                        <h2 className="font-medium text-4xl ">Habibul Bashar Sumon</h2>
                        <p className="text-lg italic mb-10 mt-1.5 relative after:content-[''] after:w-[191px] after:h-1 after:absolute after:-bottom-1 after:left-0 after:bg-blue-400 ">Meet the elite athletes who will lead Chattogram Royals to victory</p>
                        <div className="flex gap-3 items-center uppercase">
                            <div className="bg-primary-color-four rounded-2xl w-[220px] p-6">
                                <div className="flex items-center justify-between">
                                    <h6 className="text-[32px] text-white">30+</h6>
                                    <Image src={badgeImg} alt="badge" />
                                </div>
                                <p className="text-sm text-gray-200">Years Experience</p>
                            </div>
                            <div className="bg-primary-color-four rounded-2xl w-[220px] p-6">
                                <div className="flex items-center justify-between">
                                    <h6 className="text-[32px] text-white">161</h6>
                                    <Image src={badgeImg} alt="badge" />
                                </div>
                                <p className="text-sm text-gray-200">Matches</p>
                            </div>
                            <div className="bg-primary-color-four rounded-2xl w-[220px] p-6">
                                <div className="flex items-center justify-between">
                                    <h6 className="text-[32px] text-white">100+</h6>
                                    <Image src={badgeImg} alt="badge" />
                                </div>
                                <p className="text-sm text-gray-200">players mentored</p>
                            </div>
                        </div>
                        <p className="text-xl mt-10 mb-24">With over two decades of coaching excellence across international cricket, Mentor Habibul Bashar Sumon brings unparalleled strategic insight and leadership to Chattogram Royals.</p>
                        <div className="bg-[rgba(1,124,255,0.20)] p-8 border-l-2 border-l-[#161C89] rounded-2xl">
                            <Image src={quoteImg} alt='quote' />
                            <p className="text-sm my-3.5 mb-7 italic">"Cricket is not just about skills, it's about character, discipline, and the will to win. At Chattogram Royals, we're building more than a team – we're building a legacy."</p>
                            <h6 className="text-sm  after:absolute relative after:w-12 after:h-0.5 after:bg-primary-color-four after:top-1/2 after:left-0 after:content-[''] pl-18">Habibul Bashar Sumon</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Owner