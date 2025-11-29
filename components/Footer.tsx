import { Manrope } from 'next/font/google'
import Link from 'next/link'

const manrope = Manrope({ subsets: ['latin'], weight: ["700"] })

const Footer = () => {
    return (
        <footer >
            <h4 className={` bg-primary-color-four ${manrope.className} text-center  text-8xl text-white  py-12`}>Stay Tuned!</h4>
            <div className="container">
                <div className='flex justify-between items-center py-5 text-sm'>
                    <h6>@ 2026 Chottogram Royals. All rights reserved.</h6>
                    <div className="flex items-center gap-4">
                        <Link href={"/"}>Privacy Policy</Link>
                        <Link href={"/"}>Terms of Services</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer