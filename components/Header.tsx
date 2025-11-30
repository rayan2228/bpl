import { Yantramanav } from 'next/font/google';
import Link from 'next/link';
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";

const yantramanav = Yantramanav({ subsets: ['latin'], weight: ["700"] })

const socialLinks = [
    { icon: <LuTwitter />, href: "/" },
    { icon: <LuFacebook />, href: "/" },
    { icon: <LuInstagram />, href: "/" },
    { icon: <LuYoutube />, href: "/" },
];

const Header = () => {
    return (
        <header className={`
            border-b border-b-primary-color-one 
            bg-primary-color-four text-white 
            py-6 md:py-6 
            relative top-0 w-full left-0 
            ${yantramanav.className} font-bold px-2 md:px-0
        `}>
            <div className="container">
                
                {/* Responsive wrapper */}
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    
                    {/* LEFT SECTION */}
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm">Stay Tuned</h2>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-color-one"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-color-two"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-color-three"></span>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex items-center py-1 md:py-1.5">
                        <h4 className="border-r border-r-white pr-5 md:pr-8 text-sm md:text-base">
                            FOLLOW
                        </h4>

                        <ul className="flex items-center gap-4 md:gap-6 ml-5">
                            {socialLinks.map((item, index) => (
                                <li key={index} className="text-lg md:text-xl">
                                    <Link href={item.href}>
                                        {item.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
