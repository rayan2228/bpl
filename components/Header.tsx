import { Yantramanav } from 'next/font/google';
import Link from 'next/link';
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";
const yantramanav = Yantramanav({ subsets: ['latin'], weight: ["700"] })
const Header = () => {
    return (
        <header className={`border-b border-b-primary-color-one pb-4 py-8 bg-primary-color-four relative top-0 w-full left-0 text-white ${yantramanav.className} font-bold`}>
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className={` text-sm `}>Stay Tuned</h2>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-color-one"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-color-two"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-color-three"></span>
                    </div>
                    <div className='flex items-center py-1.5'>
                        <h4 className='border-r border-r-white pr-8'>FOLLOW</h4>
                        <ul className="flex items-center gap-6 ml-8">
                            <li>
                                <Link href={"/"}><LuTwitter /></Link>
                            </li>
                            <li>
                                <Link href={"/"}><LuFacebook /></Link>
                            </li>
                            <li>
                                <Link href={"/"}> <LuInstagram /></Link>
                            </li>
                            <li>
                                <Link href={"/"}><LuYoutube /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header